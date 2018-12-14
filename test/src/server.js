var express = require('express');
var app = express();
var axios = require('axios');
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "content-type");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
app.get("/map",  (req, res) => {//upload.single('avatar'),
    console.log("获取经纬度");
    console.log(req.query)
    res.send({
        state: "success"
    })
})
app.listen('9999',()=>{
    console.log("9999端口已开启")
})