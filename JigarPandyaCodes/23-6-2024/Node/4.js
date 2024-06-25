// html file data on browser using fs & http module
const http = require('http');
const fs = require('fs');

const SERVER = http.createServer((req,res)=>{
    fs.readFile('./1.html','utf-8' , function(err,data){
        if(err) throw err;
        // console.log(data);
        res.end(data)
    });
});

SERVER.listen(9000);
