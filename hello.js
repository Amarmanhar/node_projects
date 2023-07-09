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
// const express = require('express');

// const bodyParser = require("body-parser");

// const app = express();
// const adminRouter = require('./routes/admin');
// const shopRouter = require('./routes/shop');

// app.use(bodyParser.urlencoded({extended : false}))

// app.use(adminRouter);
// app.use(shopRouter);

// app.use((req,res,next)=>{
//    res.status(404).send('<h1> Page Not Found </h1>')
// })

// //  const server = http.createServer(app);
// //  server.listen(3000);
// app.listen(3000);

// const http = require('http');
const express = require('express');
const fs = require('fs');

const bodyParser = require("body-parser");
const path = require('path');
const app = express();
// const adminRouter = require('./routes/admin');
// const shopRouter = require('./routes/shop');
const loginRouter = require('./routes/login');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}))


//app.use(loginRouter);
app.get('/', (req, res) =>{

   fs.readFile("username.txt", (err , data)=>{
      if( err){
         console.log(err);
         data = 'not exist';
      }
      res.send(`${data}
      <form action="/" method ="POST" onSubmit ="document.getElementById('username').value = localStorage.getItem('username')">
      <input type="text" name="message" id="message">
      <input type="hidden" name ='username' id="username">
      <br>
      <button type="submit">Send</button>
       </form>
  `);
   })
  
});

app.post('/', (req, res, next) =>{
   console.log(req.body.username);
   console.log(req.body.message);

   fs.writeFile('username.txt', `${req.body.username} : ${req.body.message}`, {flag: 'a'},(err)=>{
                    err ? console.log(err): res.redirect('/')
              }
   );
});

app.get("/login" , (req, res,)=>{

   res.send(`
         <form action="/login" method="POST" onSubmit="localStorage.setItem('username',document.getElementById('username').value)">
         <input type="text" placeholder="enter username" id="username">
         <br>
         <button type="submit">Login</button>
         </form>         
   `)
})

app.post('/login', (req, res)=>{
   const username = req.body.username;
   console.log(`username ${username}`);
   res.redirect('/');
})
app.listen(3000);
