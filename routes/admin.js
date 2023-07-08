const express = require('express');

const router = express.Router();

router.get('/add-product', (req,res,next) =>{
    res.send('<form action="/product" method="POST"><input type ="text" name="title"><input type="number" name="size" placeholder="enter size"></br><button type ="submit">ADD PRODUCT</button></form>');
})

router.post('/product', (req,res,next)=>{
      console.log(req.body);
      res.redirect('/');
})

module.exports = router;