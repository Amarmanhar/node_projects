 const http = require('http');

 const host = 'localHhost';
 

  const server = http.createServer((request, response) =>{
//    // response.writeHead(200);
//      //response.end('Amar Manhar');
//      console.log(request);
//      process.exit();
     const url = request.url;
     if(url === '/home'){
        response.write('<html>');
        response.write('<head><title> My webpage</title></head>');
        response.write('<body><h2> welcome home </h2></body>');
        response.write('</html>');
         return response.end();
     } 
     if(url === '/about'){
        response.write('<html>');
        response.write('<head><title> My webpage</title></head>');
        response.write('<body><h2> welcome to about us </h2></body>');
        response.write('</html>');
         return response.end();
     } 
     if(url === '/node'){
        response.write('<html>');
        response.write('<head><title> My webpage</title></head>');
        response.write('<body><h2> welcome to node js projects </h2></body>');
        response.write('</html>');
         return response.end();
     } 
   response.setHeader('Content-type', 'text/html')
   response.write('<html>');
   response.write('<head><title> My webpage</title></head>');
   response.write('<body><h2> welcome to my node projects</h2></body>');
   response.write('</html>');
   response.end();
 });

 server.listen(4000);