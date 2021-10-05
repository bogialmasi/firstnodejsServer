const http = require('http');
const port = 4444;
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url);

    switch (true) {
        case req.url === '/' && req.method === 'GET':
            fs.readFile('./views/index.html', (err, file) => {
                res.setHeader('Content-Type', 'text/html');
                res.end(file);
            });
            break;
        case req.url === '/minta.css' && req.method === 'GET':
            fs.readFile('./views/minta2.css', (err, file) => {
                res.setHeader('Content-Type', 'text/css');
                res.end(file);
            });
            break;
        case req.url === '/telefon' && req.method === 'GET':
            kiszolgal('./views/telefon.json', 'application/json', req, res);
            break;
        default:
            kiszolgal('./views/hiba404.html', 'text/html', req, res);
    };
});

function kiszolgal(filename, type, req, res) {
    fs.readFile(filename, (err, file) => {
        res.setHeader('Content-Type', type);
        res.end(file);
    });
}
server.listen(port);