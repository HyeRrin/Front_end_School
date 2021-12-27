// const http = require("http");
// //http는 서버를 쉽게 구축할 수 있도록 하는 패키지
// //require은 해당 패키지를 불러와 사용할 수 있는 역할
// http.createServer((req, res) => {
//     res.writeHead(200, {"Content-Type": "text.html"}); 
//     //writeHead는 header값을 추가해 보내주는 것
//     //200은 응답 잘보냈을 때, 404는 응답이 정상적으로 이루어지지 않았다는 숫자\
//     res.end("<p>Hello World~!!!</p>");
// }).listen(3000, () => {
//     console.log("3000번 포트 서버 접속 완료~!!")
// });


const http = require("http");

http
    .createServer((req, res) => {
        if(req.url === "/") { 
        //이처럼 요청에 맞게 분기처리하는 것을 '라우팅'이라고 함
            res.writeHead(200);
            res.end("main url");
        } else if (req.url === "/upload") {
            res.writeHead(200);
            res.end("upload url");
        } else if (req.url === "/delete") {
            res.writeHead(200);
            res.end("delete url");
        } else {
            res.writeHead(404);
            res.end("Not found!!!");
        }
    })
    .listen(3000, () => {
        console.log("3000번 포트 서버 접속 완료~!!");
    });