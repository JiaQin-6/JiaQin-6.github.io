/*
 * @Author: your name
 * @Date: 2021-05-12 22:43:29
 * @LastEditTime: 2022-08-19 15:22:47
 * @LastEditors: 嘉嘉 1723470065@qq.com
 * @Description: In User Settings Edit
 * @FilePath: /vue3.0/Users/david/Desktop/github_project/dtX-configurator-frontend/public/config.js
 */
if (window.env === "dev") {
  // window.BASE_URL = "https://www5uat.bocgins.com/wsevoucher/consumer/dtx";
  // window.Insurance = "bocg";
  // window.BASE_URL = "https://hcgfohie92.execute-api.ap-southeast-1.amazonaws.com/dev";
  window.BASE_URL = "https://api-consumer.dt3aws-uat.com/dtx";
  window.Domain = "https://testing.dt3aws-uat.com/";

  // window.Domain = "https://www5uat.bocgins.com/"; 
  window.ApplicationID_Prefix = "DTXDEV";
  window.publicPath = '/';
} else if (window.env === "uat") {
  // window.BASE_URL = "https://hcgfohie92.execute-api.ap-southeast-1.amazonaws.com/uat";
  window.BASE_URL = "https://api-consumer.dt3-uat.com/dtx";
  // window.BASE_URL = "http://10.125.51.22:8889/dtx";
  window.Domain = "https://testing.dt3-uat.com/";
  window.ApplicationID_Prefix = "DTXUAT-";
  window.publicPath = '/';
} else if (window.env === "prod") {
  // window.BASE_URL = "https://www.bocgins.com/ws/consumer/dtx"; 
  // window.Insurance = "bocg";
  window.BASE_URL = "https://5rjgyd6yl0.execute-api.ap-southeast-1.amazonaws.com/prod";
  // window.Domain = "https://bocg.dtx.la/preonline";
  window.Domain = "https://wdl.dtx.la/preonline";
  window.ApplicationID_Prefix = "DTXProd-";
  window.publicPath = '/';
}
