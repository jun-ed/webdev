// create live server plugin using node http module
const http = require('http');
// console.log(http);

const SERVER = http.createServer((req,res)=>{
    res.end('Node Server is running on port 9000');
});

SERVER.listen(9000);
// > 1024 && <65535
// http://localhost:9000
// http://127.0.0.1:9000