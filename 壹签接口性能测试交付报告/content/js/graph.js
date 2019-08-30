/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 0.0, "minX": 0.0, "maxY": 431.0, "series": [{"data": [[0.0, 0.0], [0.1, 0.0], [0.2, 0.0], [0.3, 1.0], [0.4, 1.0], [0.5, 12.0], [0.6, 84.0], [0.7, 141.0], [0.8, 184.0], [0.9, 223.0], [1.0, 253.0], [1.1, 281.0], [1.2, 302.0], [1.3, 323.0], [1.4, 336.0], [1.5, 353.0], [1.6, 365.0], [1.7, 382.0], [1.8, 382.0], [1.9, 383.0], [2.0, 393.0], [2.1, 394.0], [2.2, 394.0], [2.3, 394.0], [2.4, 394.0], [2.5, 394.0], [2.6, 394.0], [2.7, 394.0], [2.8, 394.0], [2.9, 394.0], [3.0, 394.0], [3.1, 394.0], [3.2, 395.0], [3.3, 395.0], [3.4, 395.0], [3.5, 395.0], [3.6, 395.0], [3.7, 395.0], [3.8, 395.0], [3.9, 395.0], [4.0, 395.0], [4.1, 395.0], [4.2, 395.0], [4.3, 395.0], [4.4, 395.0], [4.5, 395.0], [4.6, 395.0], [4.7, 395.0], [4.8, 395.0], [4.9, 395.0], [5.0, 395.0], [5.1, 395.0], [5.2, 395.0], [5.3, 395.0], [5.4, 395.0], [5.5, 395.0], [5.6, 395.0], [5.7, 395.0], [5.8, 395.0], [5.9, 395.0], [6.0, 395.0], [6.1, 395.0], [6.2, 395.0], [6.3, 395.0], [6.4, 395.0], [6.5, 395.0], [6.6, 395.0], [6.7, 395.0], [6.8, 395.0], [6.9, 395.0], [7.0, 395.0], [7.1, 395.0], [7.2, 395.0], [7.3, 395.0], [7.4, 395.0], [7.5, 395.0], [7.6, 395.0], [7.7, 395.0], [7.8, 395.0], [7.9, 395.0], [8.0, 395.0], [8.1, 395.0], [8.2, 395.0], [8.3, 396.0], [8.4, 399.0], [8.5, 399.0], [8.6, 399.0], [8.7, 399.0], [8.8, 399.0], [8.9, 402.0], [9.0, 403.0], [9.1, 403.0], [9.2, 403.0], [9.3, 403.0], [9.4, 403.0], [9.5, 403.0], [9.6, 403.0], [9.7, 404.0], [9.8, 404.0], [9.9, 404.0], [10.0, 407.0], [10.1, 407.0], [10.2, 407.0], [10.3, 408.0], [10.4, 408.0], [10.5, 408.0], [10.6, 411.0], [10.7, 412.0], [10.8, 415.0], [10.9, 416.0], [11.0, 416.0], [11.1, 416.0], [11.2, 416.0], [11.3, 416.0], [11.4, 416.0], [11.5, 416.0], [11.6, 416.0], [11.7, 417.0], [11.8, 419.0], [11.9, 419.0], [12.0, 419.0], [12.1, 419.0], [12.2, 419.0], [12.3, 419.0], [12.4, 419.0], [12.5, 419.0], [12.6, 419.0], [12.7, 419.0], [12.8, 419.0], [12.9, 419.0], [13.0, 419.0], [13.1, 419.0], [13.2, 419.0], [13.3, 419.0], [13.4, 419.0], [13.5, 419.0], [13.6, 419.0], [13.7, 419.0], [13.8, 419.0], [13.9, 419.0], [14.0, 419.0], [14.1, 419.0], [14.2, 419.0], [14.3, 419.0], [14.4, 419.0], [14.5, 419.0], [14.6, 419.0], [14.7, 419.0], [14.8, 419.0], [14.9, 419.0], [15.0, 419.0], [15.1, 419.0], [15.2, 419.0], [15.3, 419.0], [15.4, 419.0], [15.5, 419.0], [15.6, 419.0], [15.7, 419.0], [15.8, 419.0], [15.9, 419.0], [16.0, 419.0], [16.1, 419.0], [16.2, 419.0], [16.3, 419.0], [16.4, 419.0], [16.5, 419.0], [16.6, 419.0], [16.7, 419.0], [16.8, 419.0], [16.9, 419.0], [17.0, 419.0], [17.1, 419.0], [17.2, 419.0], [17.3, 419.0], [17.4, 419.0], [17.5, 419.0], [17.6, 419.0], [17.7, 419.0], [17.8, 419.0], [17.9, 419.0], [18.0, 419.0], [18.1, 419.0], [18.2, 419.0], [18.3, 419.0], [18.4, 419.0], [18.5, 419.0], [18.6, 419.0], [18.7, 419.0], [18.8, 419.0], [18.9, 419.0], [19.0, 419.0], [19.1, 419.0], [19.2, 419.0], [19.3, 419.0], [19.4, 419.0], [19.5, 419.0], [19.6, 419.0], [19.7, 419.0], [19.8, 419.0], [19.9, 419.0], [20.0, 419.0], [20.1, 419.0], [20.2, 419.0], [20.3, 420.0], [20.4, 420.0], [20.5, 420.0], [20.6, 420.0], [20.7, 420.0], [20.8, 420.0], [20.9, 420.0], [21.0, 420.0], [21.1, 420.0], [21.2, 420.0], [21.3, 420.0], [21.4, 420.0], [21.5, 420.0], [21.6, 420.0], [21.7, 420.0], [21.8, 420.0], [21.9, 420.0], [22.0, 420.0], [22.1, 420.0], [22.2, 420.0], [22.3, 420.0], [22.4, 420.0], [22.5, 420.0], [22.6, 420.0], [22.7, 420.0], [22.8, 420.0], [22.9, 420.0], [23.0, 420.0], [23.1, 420.0], [23.2, 420.0], [23.3, 420.0], [23.4, 420.0], [23.5, 420.0], [23.6, 420.0], [23.7, 420.0], [23.8, 420.0], [23.9, 420.0], [24.0, 420.0], [24.1, 420.0], [24.2, 420.0], [24.3, 420.0], [24.4, 420.0], [24.5, 420.0], [24.6, 420.0], [24.7, 420.0], [24.8, 420.0], [24.9, 420.0], [25.0, 420.0], [25.1, 420.0], [25.2, 420.0], [25.3, 420.0], [25.4, 420.0], [25.5, 420.0], [25.6, 420.0], [25.7, 420.0], [25.8, 420.0], [25.9, 420.0], [26.0, 420.0], [26.1, 420.0], [26.2, 420.0], [26.3, 420.0], [26.4, 420.0], [26.5, 420.0], [26.6, 420.0], [26.7, 420.0], [26.8, 420.0], [26.9, 420.0], [27.0, 420.0], [27.1, 420.0], [27.2, 420.0], [27.3, 420.0], [27.4, 420.0], [27.5, 420.0], [27.6, 420.0], [27.7, 420.0], [27.8, 420.0], [27.9, 420.0], [28.0, 420.0], [28.1, 420.0], [28.2, 420.0], [28.3, 420.0], [28.4, 420.0], [28.5, 420.0], [28.6, 420.0], [28.7, 420.0], [28.8, 420.0], [28.9, 420.0], [29.0, 420.0], [29.1, 420.0], [29.2, 420.0], [29.3, 420.0], [29.4, 420.0], [29.5, 420.0], [29.6, 420.0], [29.7, 420.0], [29.8, 420.0], [29.9, 420.0], [30.0, 420.0], [30.1, 420.0], [30.2, 420.0], [30.3, 420.0], [30.4, 420.0], [30.5, 420.0], [30.6, 420.0], [30.7, 420.0], [30.8, 420.0], [30.9, 420.0], [31.0, 420.0], [31.1, 420.0], [31.2, 420.0], [31.3, 420.0], [31.4, 420.0], [31.5, 420.0], [31.6, 420.0], [31.7, 420.0], [31.8, 420.0], [31.9, 420.0], [32.0, 420.0], [32.1, 420.0], [32.2, 420.0], [32.3, 420.0], [32.4, 420.0], [32.5, 420.0], [32.6, 420.0], [32.7, 420.0], [32.8, 420.0], [32.9, 420.0], [33.0, 420.0], [33.1, 420.0], [33.2, 420.0], [33.3, 420.0], [33.4, 420.0], [33.5, 420.0], [33.6, 420.0], [33.7, 420.0], [33.8, 420.0], [33.9, 420.0], [34.0, 420.0], [34.1, 420.0], [34.2, 420.0], [34.3, 420.0], [34.4, 420.0], [34.5, 420.0], [34.6, 420.0], [34.7, 420.0], [34.8, 420.0], [34.9, 420.0], [35.0, 420.0], [35.1, 420.0], [35.2, 420.0], [35.3, 420.0], [35.4, 420.0], [35.5, 420.0], [35.6, 420.0], [35.7, 420.0], [35.8, 420.0], [35.9, 420.0], [36.0, 420.0], [36.1, 420.0], [36.2, 420.0], [36.3, 420.0], [36.4, 420.0], [36.5, 420.0], [36.6, 420.0], [36.7, 420.0], [36.8, 420.0], [36.9, 420.0], [37.0, 420.0], [37.1, 420.0], [37.2, 420.0], [37.3, 420.0], [37.4, 420.0], [37.5, 420.0], [37.6, 420.0], [37.7, 420.0], [37.8, 420.0], [37.9, 420.0], [38.0, 420.0], [38.1, 420.0], [38.2, 420.0], [38.3, 420.0], [38.4, 420.0], [38.5, 420.0], [38.6, 420.0], [38.7, 420.0], [38.8, 420.0], [38.9, 420.0], [39.0, 420.0], [39.1, 420.0], [39.2, 420.0], [39.3, 420.0], [39.4, 420.0], [39.5, 420.0], [39.6, 420.0], [39.7, 420.0], [39.8, 420.0], [39.9, 420.0], [40.0, 420.0], [40.1, 420.0], [40.2, 420.0], [40.3, 420.0], [40.4, 420.0], [40.5, 420.0], [40.6, 420.0], [40.7, 420.0], [40.8, 420.0], [40.9, 420.0], [41.0, 420.0], [41.1, 420.0], [41.2, 420.0], [41.3, 420.0], [41.4, 420.0], [41.5, 420.0], [41.6, 420.0], [41.7, 420.0], [41.8, 420.0], [41.9, 420.0], [42.0, 420.0], [42.1, 420.0], [42.2, 420.0], [42.3, 420.0], [42.4, 420.0], [42.5, 420.0], [42.6, 420.0], [42.7, 420.0], [42.8, 420.0], [42.9, 420.0], [43.0, 420.0], [43.1, 420.0], [43.2, 420.0], [43.3, 420.0], [43.4, 420.0], [43.5, 420.0], [43.6, 420.0], [43.7, 420.0], [43.8, 420.0], [43.9, 420.0], [44.0, 420.0], [44.1, 420.0], [44.2, 420.0], [44.3, 420.0], [44.4, 420.0], [44.5, 420.0], [44.6, 420.0], [44.7, 420.0], [44.8, 420.0], [44.9, 420.0], [45.0, 420.0], [45.1, 420.0], [45.2, 420.0], [45.3, 420.0], [45.4, 420.0], [45.5, 420.0], [45.6, 420.0], [45.7, 420.0], [45.8, 420.0], [45.9, 420.0], [46.0, 420.0], [46.1, 420.0], [46.2, 420.0], [46.3, 420.0], [46.4, 420.0], [46.5, 420.0], [46.6, 420.0], [46.7, 420.0], [46.8, 420.0], [46.9, 420.0], [47.0, 420.0], [47.1, 420.0], [47.2, 420.0], [47.3, 420.0], [47.4, 420.0], [47.5, 420.0], [47.6, 420.0], [47.7, 420.0], [47.8, 420.0], [47.9, 420.0], [48.0, 420.0], [48.1, 420.0], [48.2, 420.0], [48.3, 420.0], [48.4, 420.0], [48.5, 420.0], [48.6, 420.0], [48.7, 420.0], [48.8, 420.0], [48.9, 420.0], [49.0, 420.0], [49.1, 420.0], [49.2, 420.0], [49.3, 420.0], [49.4, 420.0], [49.5, 420.0], [49.6, 420.0], [49.7, 420.0], [49.8, 420.0], [49.9, 420.0], [50.0, 420.0], [50.1, 420.0], [50.2, 420.0], [50.3, 420.0], [50.4, 420.0], [50.5, 420.0], [50.6, 420.0], [50.7, 420.0], [50.8, 420.0], [50.9, 420.0], [51.0, 420.0], [51.1, 420.0], [51.2, 420.0], [51.3, 420.0], [51.4, 420.0], [51.5, 420.0], [51.6, 420.0], [51.7, 420.0], [51.8, 420.0], [51.9, 420.0], [52.0, 420.0], [52.1, 420.0], [52.2, 420.0], [52.3, 420.0], [52.4, 420.0], [52.5, 420.0], [52.6, 420.0], [52.7, 420.0], [52.8, 420.0], [52.9, 420.0], [53.0, 420.0], [53.1, 420.0], [53.2, 420.0], [53.3, 420.0], [53.4, 420.0], [53.5, 420.0], [53.6, 420.0], [53.7, 420.0], [53.8, 420.0], [53.9, 420.0], [54.0, 420.0], [54.1, 420.0], [54.2, 420.0], [54.3, 420.0], [54.4, 420.0], [54.5, 420.0], [54.6, 420.0], [54.7, 420.0], [54.8, 420.0], [54.9, 420.0], [55.0, 420.0], [55.1, 420.0], [55.2, 420.0], [55.3, 420.0], [55.4, 420.0], [55.5, 420.0], [55.6, 420.0], [55.7, 420.0], [55.8, 420.0], [55.9, 420.0], [56.0, 420.0], [56.1, 420.0], [56.2, 420.0], [56.3, 420.0], [56.4, 420.0], [56.5, 420.0], [56.6, 420.0], [56.7, 420.0], [56.8, 420.0], [56.9, 420.0], [57.0, 420.0], [57.1, 420.0], [57.2, 420.0], [57.3, 420.0], [57.4, 420.0], [57.5, 420.0], [57.6, 420.0], [57.7, 420.0], [57.8, 420.0], [57.9, 420.0], [58.0, 420.0], [58.1, 420.0], [58.2, 420.0], [58.3, 420.0], [58.4, 420.0], [58.5, 420.0], [58.6, 420.0], [58.7, 420.0], [58.8, 420.0], [58.9, 420.0], [59.0, 420.0], [59.1, 420.0], [59.2, 420.0], [59.3, 420.0], [59.4, 420.0], [59.5, 420.0], [59.6, 420.0], [59.7, 420.0], [59.8, 420.0], [59.9, 420.0], [60.0, 420.0], [60.1, 420.0], [60.2, 420.0], [60.3, 420.0], [60.4, 420.0], [60.5, 420.0], [60.6, 420.0], [60.7, 420.0], [60.8, 420.0], [60.9, 420.0], [61.0, 420.0], [61.1, 420.0], [61.2, 420.0], [61.3, 420.0], [61.4, 420.0], [61.5, 420.0], [61.6, 420.0], [61.7, 420.0], [61.8, 420.0], [61.9, 420.0], [62.0, 420.0], [62.1, 420.0], [62.2, 420.0], [62.3, 420.0], [62.4, 420.0], [62.5, 420.0], [62.6, 420.0], [62.7, 420.0], [62.8, 420.0], [62.9, 420.0], [63.0, 420.0], [63.1, 420.0], [63.2, 420.0], [63.3, 420.0], [63.4, 420.0], [63.5, 420.0], [63.6, 420.0], [63.7, 420.0], [63.8, 420.0], [63.9, 420.0], [64.0, 420.0], [64.1, 420.0], [64.2, 420.0], [64.3, 420.0], [64.4, 420.0], [64.5, 420.0], [64.6, 420.0], [64.7, 420.0], [64.8, 420.0], [64.9, 420.0], [65.0, 420.0], [65.1, 420.0], [65.2, 420.0], [65.3, 420.0], [65.4, 420.0], [65.5, 420.0], [65.6, 420.0], [65.7, 420.0], [65.8, 420.0], [65.9, 420.0], [66.0, 420.0], [66.1, 420.0], [66.2, 420.0], [66.3, 420.0], [66.4, 420.0], [66.5, 420.0], [66.6, 420.0], [66.7, 420.0], [66.8, 420.0], [66.9, 420.0], [67.0, 420.0], [67.1, 420.0], [67.2, 420.0], [67.3, 420.0], [67.4, 420.0], [67.5, 420.0], [67.6, 420.0], [67.7, 420.0], [67.8, 420.0], [67.9, 420.0], [68.0, 420.0], [68.1, 420.0], [68.2, 420.0], [68.3, 420.0], [68.4, 420.0], [68.5, 420.0], [68.6, 420.0], [68.7, 420.0], [68.8, 420.0], [68.9, 420.0], [69.0, 420.0], [69.1, 420.0], [69.2, 420.0], [69.3, 420.0], [69.4, 420.0], [69.5, 420.0], [69.6, 420.0], [69.7, 420.0], [69.8, 420.0], [69.9, 420.0], [70.0, 420.0], [70.1, 420.0], [70.2, 420.0], [70.3, 420.0], [70.4, 420.0], [70.5, 420.0], [70.6, 420.0], [70.7, 420.0], [70.8, 420.0], [70.9, 420.0], [71.0, 420.0], [71.1, 420.0], [71.2, 420.0], [71.3, 420.0], [71.4, 420.0], [71.5, 420.0], [71.6, 420.0], [71.7, 420.0], [71.8, 420.0], [71.9, 420.0], [72.0, 420.0], [72.1, 420.0], [72.2, 420.0], [72.3, 420.0], [72.4, 420.0], [72.5, 420.0], [72.6, 420.0], [72.7, 420.0], [72.8, 420.0], [72.9, 420.0], [73.0, 420.0], [73.1, 420.0], [73.2, 420.0], [73.3, 420.0], [73.4, 420.0], [73.5, 420.0], [73.6, 420.0], [73.7, 420.0], [73.8, 420.0], [73.9, 420.0], [74.0, 420.0], [74.1, 420.0], [74.2, 420.0], [74.3, 420.0], [74.4, 420.0], [74.5, 420.0], [74.6, 420.0], [74.7, 420.0], [74.8, 420.0], [74.9, 420.0], [75.0, 420.0], [75.1, 420.0], [75.2, 420.0], [75.3, 420.0], [75.4, 420.0], [75.5, 420.0], [75.6, 420.0], [75.7, 420.0], [75.8, 420.0], [75.9, 420.0], [76.0, 420.0], [76.1, 420.0], [76.2, 420.0], [76.3, 420.0], [76.4, 420.0], [76.5, 420.0], [76.6, 420.0], [76.7, 420.0], [76.8, 420.0], [76.9, 420.0], [77.0, 420.0], [77.1, 420.0], [77.2, 420.0], [77.3, 420.0], [77.4, 420.0], [77.5, 420.0], [77.6, 420.0], [77.7, 420.0], [77.8, 420.0], [77.9, 420.0], [78.0, 420.0], [78.1, 420.0], [78.2, 420.0], [78.3, 420.0], [78.4, 420.0], [78.5, 420.0], [78.6, 420.0], [78.7, 420.0], [78.8, 420.0], [78.9, 420.0], [79.0, 420.0], [79.1, 420.0], [79.2, 420.0], [79.3, 420.0], [79.4, 420.0], [79.5, 420.0], [79.6, 420.0], [79.7, 420.0], [79.8, 420.0], [79.9, 420.0], [80.0, 420.0], [80.1, 420.0], [80.2, 420.0], [80.3, 420.0], [80.4, 420.0], [80.5, 420.0], [80.6, 420.0], [80.7, 420.0], [80.8, 420.0], [80.9, 420.0], [81.0, 420.0], [81.1, 420.0], [81.2, 420.0], [81.3, 420.0], [81.4, 420.0], [81.5, 420.0], [81.6, 420.0], [81.7, 420.0], [81.8, 420.0], [81.9, 420.0], [82.0, 420.0], [82.1, 420.0], [82.2, 420.0], [82.3, 420.0], [82.4, 420.0], [82.5, 420.0], [82.6, 420.0], [82.7, 420.0], [82.8, 420.0], [82.9, 420.0], [83.0, 420.0], [83.1, 420.0], [83.2, 420.0], [83.3, 420.0], [83.4, 420.0], [83.5, 420.0], [83.6, 420.0], [83.7, 420.0], [83.8, 420.0], [83.9, 420.0], [84.0, 420.0], [84.1, 420.0], [84.2, 420.0], [84.3, 420.0], [84.4, 420.0], [84.5, 420.0], [84.6, 420.0], [84.7, 420.0], [84.8, 420.0], [84.9, 420.0], [85.0, 420.0], [85.1, 420.0], [85.2, 420.0], [85.3, 420.0], [85.4, 420.0], [85.5, 420.0], [85.6, 420.0], [85.7, 420.0], [85.8, 420.0], [85.9, 420.0], [86.0, 420.0], [86.1, 420.0], [86.2, 420.0], [86.3, 420.0], [86.4, 420.0], [86.5, 420.0], [86.6, 420.0], [86.7, 420.0], [86.8, 420.0], [86.9, 420.0], [87.0, 420.0], [87.1, 420.0], [87.2, 420.0], [87.3, 420.0], [87.4, 420.0], [87.5, 420.0], [87.6, 420.0], [87.7, 420.0], [87.8, 420.0], [87.9, 420.0], [88.0, 420.0], [88.1, 420.0], [88.2, 420.0], [88.3, 420.0], [88.4, 420.0], [88.5, 420.0], [88.6, 420.0], [88.7, 420.0], [88.8, 421.0], [88.9, 421.0], [89.0, 421.0], [89.1, 421.0], [89.2, 421.0], [89.3, 421.0], [89.4, 421.0], [89.5, 421.0], [89.6, 421.0], [89.7, 421.0], [89.8, 421.0], [89.9, 421.0], [90.0, 421.0], [90.1, 421.0], [90.2, 421.0], [90.3, 421.0], [90.4, 421.0], [90.5, 421.0], [90.6, 421.0], [90.7, 421.0], [90.8, 421.0], [90.9, 421.0], [91.0, 421.0], [91.1, 421.0], [91.2, 421.0], [91.3, 421.0], [91.4, 421.0], [91.5, 421.0], [91.6, 421.0], [91.7, 421.0], [91.8, 421.0], [91.9, 421.0], [92.0, 421.0], [92.1, 421.0], [92.2, 421.0], [92.3, 421.0], [92.4, 421.0], [92.5, 421.0], [92.6, 421.0], [92.7, 421.0], [92.8, 421.0], [92.9, 421.0], [93.0, 421.0], [93.1, 421.0], [93.2, 421.0], [93.3, 421.0], [93.4, 421.0], [93.5, 421.0], [93.6, 421.0], [93.7, 421.0], [93.8, 421.0], [93.9, 421.0], [94.0, 421.0], [94.1, 421.0], [94.2, 421.0], [94.3, 421.0], [94.4, 421.0], [94.5, 421.0], [94.6, 421.0], [94.7, 421.0], [94.8, 421.0], [94.9, 421.0], [95.0, 421.0], [95.1, 421.0], [95.2, 421.0], [95.3, 421.0], [95.4, 421.0], [95.5, 421.0], [95.6, 421.0], [95.7, 421.0], [95.8, 421.0], [95.9, 421.0], [96.0, 421.0], [96.1, 421.0], [96.2, 421.0], [96.3, 421.0], [96.4, 421.0], [96.5, 421.0], [96.6, 421.0], [96.7, 421.0], [96.8, 421.0], [96.9, 421.0], [97.0, 421.0], [97.1, 421.0], [97.2, 421.0], [97.3, 421.0], [97.4, 421.0], [97.5, 421.0], [97.6, 421.0], [97.7, 421.0], [97.8, 421.0], [97.9, 421.0], [98.0, 421.0], [98.1, 421.0], [98.2, 421.0], [98.3, 421.0], [98.4, 421.0], [98.5, 421.0], [98.6, 421.0], [98.7, 421.0], [98.8, 421.0], [98.9, 421.0], [99.0, 421.0], [99.1, 421.0], [99.2, 421.0], [99.3, 421.0], [99.4, 421.0], [99.5, 421.0], [99.6, 421.0], [99.7, 421.0], [99.8, 421.0], [99.9, 422.0], [100.0, 431.0]], "isOverall": false, "label": "Java\u8BF7\u6C42", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 106.0, "minX": 0.0, "maxY": 45598.0, "series": [{"data": [[0.0, 311.0], [300.0, 3809.0], [100.0, 106.0], [200.0, 176.0], [400.0, 45598.0]], "isOverall": false, "label": "Java\u8BF7\u6C42", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 400.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 50000.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 50000.0, "series": [{"data": [[0.0, 50000.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 87.62728785357729, "minX": 1.56585936E12, "maxY": 100.0, "series": [{"data": [[1.56585936E12, 93.6953271028038], [1.5658596E12, 87.62728785357729], [1.56585942E12, 100.0], [1.56585954E12, 98.851981515194], [1.56585948E12, 100.0]], "isOverall": false, "label": "1\u7B7E\u63A5\u53E3", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5658596E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 1.5590062111801235, "minX": 1.0, "maxY": 419.88463017851996, "series": [{"data": [[2.0, 131.0], [3.0, 77.5], [4.0, 11.375], [5.0, 2.4155844155844157], [6.0, 1.5590062111801235], [7.0, 147.0], [8.0, 79.0], [9.0, 47.0], [10.0, 87.5], [11.0, 62.5], [12.0, 76.66666666666666], [13.0, 78.66666666666666], [14.0, 79.66666666666666], [15.0, 70.0], [16.0, 102.5], [17.0, 70.5], [18.0, 176.0], [19.0, 128.5], [20.0, 82.2], [21.0, 123.0], [22.0, 94.5], [23.0, 107.66666666666666], [24.0, 111.66666666666666], [25.0, 103.25], [26.0, 115.66666666666666], [27.0, 109.75], [28.0, 126.0], [29.0, 126.0], [30.0, 119.5], [31.0, 174.83333333333334], [32.0, 144.4], [33.0, 160.0], [34.0, 149.6], [35.0, 176.2], [36.0, 181.2], [37.0, 172.16666666666669], [38.0, 173.75], [39.0, 177.25], [40.0, 179.5], [41.0, 172.2], [42.0, 217.5], [43.0, 177.6], [44.0, 178.8], [45.0, 208.0], [46.0, 197.5], [47.0, 188.4], [48.0, 215.4], [49.0, 185.66666666666666], [50.0, 220.6], [51.0, 220.42857142857142], [52.0, 242.14285714285714], [53.0, 243.9], [54.0, 222.5], [55.0, 244.33333333333334], [56.0, 257.5], [57.0, 246.49999999999997], [58.0, 232.75], [59.0, 255.0], [60.0, 266.85714285714283], [61.0, 242.33333333333331], [62.0, 271.1428571428571], [63.0, 273.71428571428567], [64.0, 258.42857142857144], [65.0, 286.375], [66.0, 285.1818181818182], [67.0, 280.0], [68.0, 304.0], [69.0, 287.44444444444446], [70.0, 310.83333333333337], [71.0, 299.2857142857143], [72.0, 299.1], [73.0, 319.99999999999994], [74.0, 322.0], [75.0, 294.2857142857143], [76.0, 334.5], [77.0, 324.6153846153846], [78.0, 333.90909090909093], [79.0, 342.8666666666667], [80.0, 342.00000000000006], [81.0, 323.1666666666667], [82.0, 331.5], [83.0, 365.9545454545455], [84.0, 364.2], [85.0, 363.7142857142858], [86.0, 368.7894736842105], [87.0, 364.21428571428567], [88.0, 355.92857142857133], [89.0, 352.75], [90.0, 335.6], [91.0, 387.87719298245605], [92.0, 382.0526315789474], [93.0, 354.8888888888889], [94.0, 394.87664783427556], [95.0, 399.6203007518797], [96.0, 403.32015065913356], [97.0, 408.0993377483443], [98.0, 413.0769230769231], [99.0, 415.9642058165549], [100.0, 419.88463017851996], [1.0, 129.0]], "isOverall": false, "label": "Java\u8BF7\u6C42", "isController": false}, {"data": [[98.55131999999992, 413.82659999999964]], "isOverall": false, "label": "Java\u8BF7\u6C42-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 0.0, "minX": 1.56585936E12, "maxY": 5713.2, "series": [{"data": [[1.56585936E12, 2140.0], [1.5658596E12, 721.2], [1.56585942E12, 5712.8], [1.56585954E12, 5712.8], [1.56585948E12, 5713.2]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.56585936E12, 0.0], [1.5658596E12, 0.0], [1.56585942E12, 0.0], [1.56585954E12, 0.0], [1.56585948E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5658596E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 378.24514697725965, "minX": 1.56585936E12, "maxY": 420.0345865714483, "series": [{"data": [[1.56585936E12, 388.537196261682], [1.5658596E12, 378.24514697725965], [1.56585942E12, 420.0326985016107], [1.56585954E12, 415.37732810530866], [1.56585948E12, 420.0345865714483]], "isOverall": false, "label": "Java\u8BF7\u6C42", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5658596E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.56585936E12, "maxY": 4.9E-324, "series": [{"data": [[1.56585936E12, 0.0], [1.5658596E12, 0.0], [1.56585942E12, 0.0], [1.56585954E12, 0.0], [1.56585948E12, 0.0]], "isOverall": false, "label": "Java\u8BF7\u6C42", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5658596E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.56585936E12, "maxY": 4.9E-324, "series": [{"data": [[1.56585936E12, 0.0], [1.5658596E12, 0.0], [1.56585942E12, 0.0], [1.56585954E12, 0.0], [1.56585948E12, 0.0]], "isOverall": false, "label": "Java\u8BF7\u6C42", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5658596E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.56585936E12, "maxY": 431.0, "series": [{"data": [[1.56585936E12, 427.0], [1.5658596E12, 398.0], [1.56585942E12, 429.0], [1.56585954E12, 427.0], [1.56585948E12, 431.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.56585936E12, 0.0], [1.5658596E12, 129.0], [1.56585942E12, 410.0], [1.56585954E12, 392.0], [1.56585948E12, 411.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.56585936E12, 421.0], [1.5658596E12, 395.0], [1.56585942E12, 421.0], [1.56585954E12, 420.0], [1.56585948E12, 421.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.56585936E12, 421.0], [1.5658596E12, 396.0], [1.56585942E12, 421.0], [1.56585954E12, 421.0], [1.56585948E12, 421.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.56585936E12, 421.0], [1.5658596E12, 395.0], [1.56585942E12, 421.0], [1.56585954E12, 421.0], [1.56585948E12, 421.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5658596E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 1.0, "minX": 137.0, "maxY": 420.0, "series": [{"data": [[137.0, 261.0], [351.0, 1.0], [238.0, 420.0], [239.0, 420.0], [237.0, 420.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 351.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 0.0, "minX": 137.0, "maxY": 4.9E-324, "series": [{"data": [[137.0, 0.0], [351.0, 0.0], [238.0, 0.0], [239.0, 0.0], [237.0, 0.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 351.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 28.483333333333334, "minX": 1.56585936E12, "maxY": 238.05, "series": [{"data": [[1.56585936E12, 90.83333333333333], [1.5658596E12, 28.483333333333334], [1.56585942E12, 238.03333333333333], [1.56585954E12, 237.93333333333334], [1.56585948E12, 238.05]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5658596E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 30.05, "minX": 1.56585936E12, "maxY": 238.05, "series": [{"data": [[1.56585936E12, 89.16666666666667], [1.5658596E12, 30.05], [1.56585942E12, 238.03333333333333], [1.56585954E12, 238.03333333333333], [1.56585948E12, 238.05]], "isOverall": false, "label": "", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5658596E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 30.05, "minX": 1.56585936E12, "maxY": 238.05, "series": [{"data": [[1.56585936E12, 89.16666666666667], [1.5658596E12, 30.05], [1.56585942E12, 238.03333333333333], [1.56585954E12, 238.03333333333333], [1.56585948E12, 238.05]], "isOverall": false, "label": "Java\u8BF7\u6C42-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5658596E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 30.05, "minX": 1.56585936E12, "maxY": 238.05, "series": [{"data": [[1.56585936E12, 89.16666666666667], [1.5658596E12, 30.05], [1.56585942E12, 238.03333333333333], [1.56585954E12, 238.03333333333333], [1.56585948E12, 238.05]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5658596E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

