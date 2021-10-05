const http = require('http');
const port = 4444;
const fs = require('fs');

const server = http.createServer((req, res)=>{
    res.write(`A kérés forrása ${req.url}`);
    res.end("       - Vége");
});
server.listen(port);