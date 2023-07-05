 const http = require('http');

  const server = http.createServer((request, response) =>{
    response.writeHead(200);
     response.end('Amar Manhar');
 });

 server.listen(4000);