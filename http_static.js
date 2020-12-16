const http = require('http');
const fs = require('fs');
http.createServer((req,res)=>{
    const readStream = fs.createReadStream('./static/index.html');
    res.writeHead(200,{'Content-type': 'text/html'});
    /*const readStream = fs.createReadStream('./static/download.jpeg');
    res.writeHead(200,{'Content-type': 'image/jpeg'});*/
    readStream.pipe(res);
}).listen(3000);