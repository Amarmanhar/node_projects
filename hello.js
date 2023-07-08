// const http = require('http');

// const routes = require('./routes');

// console.log(routes.sometext);
//  const server = http.createServer(routes.handler);
//  server.listen(3000);


// const express = require('express');

// const app = express();

// app.use((req, res, next) =>{
//   console.log("in the middleware");
//   next();
// })

// app.use((req, res, next) =>{
//   console.log('i am in another middleware');
//   res.send('<h1> hello form express js</h1>')
// })


// app.listen(3000);

// const http = require('http');
const express = require('express');

const bodyParser = require("body-parser");

const app = express();
const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

app.use(bodyParser.urlencoded({extended : false}))

app.use(adminRouter);
app.use(shopRouter);

app.use((req,res,next)=>{
   res.status(404).send('<h1> Page Not Found </h1>')
})

//  const server = http.createServer(app);
//  server.listen(3000);
app.listen(3000);
