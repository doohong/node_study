// var http = require("http");
// http.createServer(function(request, response){
//     /* 
//         HTTP 헤더 전송
//         HTTP Status: 200 : OK
//         Content Type: text/plain
//     */
//     response.writeHead(200, {'Content-Type': 'text/plain'});
    
//     /*
//         Response Body 를 "Hello World" 로 설정
//     */
//     response.end("Hello World\n");
// }).listen(8081);


var express = require("express");
var app = express();
var server = app.listen(3000, function(){
    console.log("Express server has started on port 3000");
})
// Cannot GET 

app.get('/',function(req,res){
    res.send("hello World");
})