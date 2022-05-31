/*
 * @Author: your name
 * @Date: 2021-11-22 17:24:13
 * @LastEditTime: 2022-05-27 17:26:39
 * @LastEditors: 嘉嘉 1723470065@qq.com
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \dtX-consumer-frontendc:\Users\Shinelon\Desktop\company-product\dtX-configurator-frontend\public\config.js
 */

if (window.env === 'dev') {
    // window.BASE_URL = "https://d66guugabi.execute-api.ap-southeast-1.amazonaws.com/Dev";
    window.BASE_URL = "https://api-insurer.dt3aws-uat.com/dtx";
    // window.BASE_URL = "http://10.125.61.108:8888/dtx";
    // window.Insurance = "bocg";
    // window.BASE_URL = "https://wwwuat.bocgins.com/wschannelcode/config/dtx/";
    window.Domain = "https://testing.dt3aws-uat.com/admin/"; //https://testing.dt3aws-uat.com/admin/, https://simas.dt3aws-uat.com/admin/
    window.ClientId = "4p91ghlseiuaelsdh1neii37pa";
    window.paymentEnvironment = 'Dev';
    window.ApplicationID_Prefix = "DTXDEV";
    window.publicPath = '/admin/';
} else if (window.env === 'uat') {
    // window.BASE_URL = "https://d66guugabi.execute-api.ap-southeast-1.amazonaws.com/Uat";
    window.BASE_URL = "https://api-insurer.dt3-uat.com/dtx";
    window.Domain = "https://testing.dt3-uat.com/admin/";
    window.ClientId = "5qc0osckcirtotpgbfcqt3ag0r";
    window.paymentEnvironment = 'Uat';
    window.ApplicationID_Prefix = "DTXUAT-";
    window.publicPath = '/admin/';
} else if (window.env === 'prod') {
    window.BASE_URL = "https://iprh0alko6.execute-api.eu-west-2.amazonaws.com/prod";
    // window.Domain = "https://testing.dtx.la/admin/";
    window.Domain = "https://testing.uk.dtx.la/admin/";
    window.ClientId = "6lrik76nardg41bfnitqms9310";
    window.paymentEnvironment = 'Prod';
    window.ApplicationID_Prefix = "DTXProd-";
    window.publicPath = '/admin/';
}