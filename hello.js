// const http = require('http');

// const routes = require('./routes');

// console.log(routes.sometext);
//  const server = http.createServer(routes.handler);
//  server.listen(3000);


const express = require('express');

const app = express();

app.use((req, res, next) =>{
  console.log("in the middleware");
  next();
})

app.use((req, res, next) =>{
  console.log('i am in another middleware');
  res.send('<h1> hello form express js</h1>')
})


app.listen(3000);
