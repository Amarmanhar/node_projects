// console.log('hello world from node js');

// const fs = require('fs');

// fs.writeFileSync('hello.txt', 'heelo from node js');
const http = require('http');
const fs = require('fs');

 const server = http.createServer((request, response) =>{
//    // response.writeHead(200);
//      //response.end('Amar Manhar');
//      console.log(request);
//      process.exit();
    const url = request.url;
    const method = request.method;
    if(url === '/'){
        fs.readFile('message2.txt', {encoding: 'utf-8'}, (error, data)=>{
            if(error){
                console.log(error);
            }
            response.write('<html>');
            response.write('<head><title> enter the message</title></head>');  
            response.write(`<body>${data}</body>`);
            response.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
            response.write('</html>');
            return response.end(); 
        })
        
            
    }
   else if(url === "/message" && method ==="POST"){
       const body = [];
       request.on('data', (chunks) =>{
            body.push(chunks);
       });
      return request.on('end', () =>{
           const parsedBody = Buffer.concat(body).toString();
           const message = parsedBody.split('=')[1];
           fs.writeFile('message2.txt', message, (error) =>{
               response.statusCode = 302;
               response.setHeader('Location', "/");
               return response.end();
           });          
       });    
    }

   //  if(url === '/about'){
   //     response.write('<html>');
   //     response.write('<head><title> My webpage</title></head>');
   //     response.write('<body><h2> welcome to about us </h2></body>');
   //     response.write('</html>');
   //      return response.end();
   //  } 
   //  if(url === '/node'){
   //     response.write('<html>');
   //     response.write('<head><title> My webpage</title></head>');
   //     response.write('<body><h2> welcome to node js projects </h2></body>');
   //     response.write('</html>');
   //      return response.end();
   //  } 
 else{ response.setHeader('Content-type', 'text/html')
  response.write('<html>');
  response.write('<head><title> My webpage</title></head>');
  response.write('<body><h2> welcome to my node projects</h2></body>');
  response.write('</html>');
  response.end();
}
});


server.listen(3000);
