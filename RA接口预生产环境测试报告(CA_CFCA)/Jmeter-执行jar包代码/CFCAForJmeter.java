package cn.tsa.jmeter;

import org.apache.jmeter.protocol.java.sampler.AbstractJavaSamplerClient;
import org.apache.jmeter.protocol.java.sampler.JavaSamplerContext;
import org.apache.jmeter.samplers.SampleResult;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;

import cn.tsa.CertAPI;

import cn.tsa.CertAPIService;

import cn.tsa.certapi.webservice.cfca.CfcaCertAPI;
import cn.tsa.certapi.webservice.cfca.CfcaCertAPIDemo;
import cn.tsa.certapi.webservice.cfca.CfcaCertAPIService;
import cn.tsa.certapi.webservice.cfca.Result;

import java.util.*;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.net.URL;
import java.security.NoSuchAlgorithmException;
public class CFCAForJmeter extends AbstractJavaSamplerClient{
    private String sum;    
    int suc_count = 0;
//    public void setupTest(JavaSamplerContext arg0) {
//    	
//    } 
    //测试执行的循环体，根据线程数和循环次数的不同可执行多次，类似于LoadRunner中的Action方法
	public SampleResult runTest(JavaSamplerContext arg0) {
    	SampleResult results=new SampleResult();
		String url = "";
		url = "http://101.201.239.215:18088/service/CfcaCertAPI";
		Result res_ok = null ;
         try{
        	CfcaCertAPIDemo ca = new CfcaCertAPIDemo();
     		long avg=0;
    		int count = 0;
    		

			CfcaCertAPI service = new CfcaCertAPIService(new URL(url)).getCfcaCertAPIPort();
			Map<String, String> param = new HashMap<String, String>();
			String password = "20191008001";
			param.put("password", "20191008001");// 必填项
			param.put("username", "test_20191008001");//必填项
			param.put("period","5"); // 必填项 day:1-30,month:1-12,year:1-5
			param.put("periodType", "day"); // 必填项 day, month,year
			//证件类型,  个人
//			  居民身份证("0"), 护照("1"), 军人身份证("2"), 股东代码证("5"), 社会保障卡("6"),
//			  武装警察身份证件("A"), 港澳居民往来内地通行证("B"), 台湾居民来往大陆通行证("C"), 户口簿("E"),
//			  临时居民身份证("F"), 警察警官证("G"), 社会团体登记证书("J"), 民办非企业登记证书("K"),  外国人永久居留证("P"),
			  //证件类型,  企业
//			  工商登记证("3"), 税务登记证("4"), 组织机构代码证("7"), 企业营业执照("8"), 法人代码证("9"), 
//			  事业单位法人证书("H"), 外国地区企业常驻代表机构登记证("L"), 政府批文("M"), 统一社会信用代码证("N");
			param.put("cardType", "0"); 
			param.put("cardNumber", "101111770514121"); // 必填项
			param.put("email", "tsa@tsa.cn"); // 非必填项」

			String json = JSON.toJSONString(param);
			String sign = ca.sign(param);
			//System.out.println(sign);
			if (ca.checkSign(param, sign)) {
				long one = System.currentTimeMillis();
				results.sampleStart();     //定义一个事务，表示这是事务的起始点，类似于LoadRunner的lr.start_transaction
				// 设置pin码密钥，并获取证书
				Result result = service.handle("51b108418653c69f0f040ba4e9057d0f", json, sign);
				results.sampleEnd();     //定义一个事务，表示这是事务的结束点，类似于LoadRunner的lr.end_transaction   
				long runtime = System.currentTimeMillis() - one;
				count ++;
				avg = avg+runtime;
				res_ok = result;
				JSONObject jsonObj = JSONObject.parseObject(result.getParam());
				String pfx = jsonObj.getString("pfx");
				String md5 = jsonObj.getString("sign");
				//System.out.println(JSONObject.toJSON(result).toString());
//				System.out.println("checkResult(pfx, md5) = " + (checkResult(pfx, md5)));
				boolean flg = ca.checkResult(pfx, md5);
				
				if (flg) {
					suc_count ++;
					//System.out.println("ok");
					Base64.Decoder bd = Base64.getDecoder();
					byte[] cert = bd.decode(pfx);
					//BASE64Decoder bd = new BASE64Decoder();
					//byte[] cert = bd.decodeBuffer(pfx);
					FileOutputStream fos = new FileOutputStream(new File("/home/ma/cert_test/cfca/"+password+"_"+UUID.randomUUID()+".pfx"));
					fos.write(cert);
					fos.flush();
					fos.close();
					res_ok = result;
				} else {
					//System.out.println("errorerrorerrorerrorerrorerrorerrorerrorerrorerr");
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
    	CFCAForJmeter test = new CFCAForJmeter();  
        test.runTest(null); 
    } 
}