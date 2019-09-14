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


// var express = require("express");
// var app = express();
// var server = app.listen(3000, function(){
//     console.log("Express server has started on port 3000");
// })
// // Cannot GET 

// app.get('/',function(req,res){
//     res.send("hello World");
// })
// // 기본 라우터

/*
HTTP 통신 요청(Request; GET, POST, DELETE 등)에 대한 핸들러를 만든다.
템플릿에 데이터를 넣어 응답(response)을 만들기 위해 view의 렌더링 엔진과 결합(integrate)한다. 
접속을 위한 포트나 응답 렌더링을 위한 템플릿 위치같은 공통 웹 어플리케이션 세팅을 한다. 
핸들링 파이프라인(reqest handling pipeline) 중 필요한 곳에 추가적인 미들웨어 처리 요청을 추가한다.
*/
var express = require('express');
var app = express();
var router = require('./router')(app);

// view 경로 설정
app.set('views', __dirname + '/');

// 화면 engine을 ejs로 설정
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var server = app.listen(3000, function(){
    console.log("Express server has started on port 3000")
});
