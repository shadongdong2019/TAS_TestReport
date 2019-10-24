package cn.tsa.jmeter;

import org.apache.jmeter.protocol.java.sampler.AbstractJavaSamplerClient;
import org.apache.jmeter.protocol.java.sampler.JavaSamplerContext;
import org.apache.jmeter.samplers.SampleResult;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;

import cn.tsa.CertAPI;
import cn.tsa.CertAPIDemo;
import cn.tsa.CertAPIService;
import cn.tsa.Result;
import java.util.*;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.net.URL;
import java.security.NoSuchAlgorithmException;
public class CAForJmeter extends AbstractJavaSamplerClient{
    private String sum;    
    int suc_count = 0;
   
    
    //测试执行的循环体，根据线程数和循环次数的不同可执行多次，类似于LoadRunner中的Action方法
	public SampleResult runTest(JavaSamplerContext arg0) {
    	SampleResult results=new SampleResult();
		String url = "";
		url = "http://101.201.239.215:18088/service/CertAPI";
		Result res_ok = null ;
         try{
        	 CertAPIDemo ca = new CertAPIDemo();
     		long avg=0;
    		int count = 0;
    		

			CertAPI service = new CertAPIService(new URL(url)).getCertAPIPort();
			Map<String, String> param = new HashMap<String, String>();
			String password = "ca_xn20190929001";
			param.put("password", "ca_xn20190929001");// 必填项
			param.put("username", "test_ca_xn20190929001");//必填项
			param.put("subject", "o=北京技术服务有限公司,ou=测试专用,cn=23464567575675634XE-北京技术服务有限公司");// 必填项
			param.put("period", "1"); // 必填项 day:1-30,month:1-12,year:1-3
			param.put("periodType", "month"); // 必填项 day, month,year
			param.put("cardType", "港澳通行证"); // 必填项 "身份证","护照","港澳通行证","台胞证","统一社会信用代码","统一社会信用代码"
			param.put("cardNumber", "110111198801011234"); // 必填项
			param.put("email", "majing01@tsa.cn"); // 非必填项」
			
			String json = JSON.toJSONString(param);
			String sign = ca.sign(param);
			if (ca.checkSign(param, sign)) {
				
				long one = System.currentTimeMillis();
				results.sampleStart();     //定义一个事务，表示这是事务的起始点，类似于LoadRunner的lr.start_transaction
				// 设置pin码密钥，并获取证书
				Result result = service.handle("94ea4fc6c1577982d50a2947f0102db2", json, sign);
				results.sampleEnd();     //定义一个事务，表示这是事务的结束点，类似于LoadRunner的lr.end_transaction   
				long runtime = System.currentTimeMillis() - one;
				count ++;
				avg = avg+runtime;
				res_ok = result;
				JSONObject jsonObj = JSONObject.parseObject(result.getParam());
				String pfx = jsonObj.getString("pfx");
				String md5 = jsonObj.getString("sign");
				//System.out.println(JSONObject.toJSON(result).toString());
				boolean flg = ca.checkResult(pfx, md5);
				
				if (flg) {
					suc_count ++;
					//System.out.println("ok");
					Base64.Decoder bd = Base64.getDecoder();
					byte[] cert = bd.decode(pfx);
					FileOutputStream fos = new FileOutputStream(new File("/home/ma/cert_test/ca/"+password+"_"+UUID.randomUUID()+".pfx"));
					fos.write(cert);
					fos.flush();
					fos.close();
					res_ok = result;
				} else {
					//System.out.println("errorerrorerrorerrorerrorerrorerrorerrorerrorerror");
					res_ok = result;
				}
			}
//			System.out.println("总共验签成功："+suc_count);
//			System.out.println("总时长："+avg);
//			System.out.println("请求次数："+count);
//			System.out.println("平均响应时间："+avg/count);
        	 
        	 
        	 
        	 
            if (res_ok.getCode().equals("0")) {
                 results.setResponseData("RA-CA接口测试成功，返回结果{code:"+res_ok.getCode()+",sign:"+res_ok.getSign()+"}", null);
                 results.setDataType(SampleResult.TEXT);
               //  System.out.println("RA-CA接口测试成功，返回结果{code:"+res_ok.getCode()+",sign:"+res_ok.getSign()+"}");//会输出在Jmeter启动的命令窗口中
             }else{
                 results.setResponseData("RA-CA接口测试失败，返回结果{code:"+res_ok.getCode()+",param:"+res_ok.getParam()+",sign:"+res_ok.getSign()+"}", null);
                 results.setDataType(SampleResult.TEXT);
             }//会显示在结果树的响应数据里  
             //System.out.println("壹签-时间戳接口返回值长度："+arr[0]+",获取证书接口返回值长度："+arr[1]);//会输出在Jmeter启动的命令窗口中
             results.setSuccessful(true);
         }catch(Throwable e){
             results.setSuccessful(false);
             e.printStackTrace();
         }finally{            
            // results.sampleEnd();     //定义一个事务，表示这是事务的结束点，类似于LoadRunner的lr.end_transaction    
         }
       return results;
    }
    
    //结束方法，实际运行时每个线程仅执行一次，在测试方法运行结束后执行，类似于LoadRunner中的end方法
    public void teardownTest(JavaSamplerContext arg0) {
    	System.out.println("总共验签成功："+suc_count);
    }   
    
    
    public static void main(String[] args) {  
    	CAForJmeter test = new CAForJmeter();  
        test.runTest(null); 
    } 
}