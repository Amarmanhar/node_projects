const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/contact', (req, res, next)=>{
    res.sendFile(path.join(__dirname, '../', 'views', 'register.html'));
})

router.post('/contact', (req,res,next) =>{
    res.redirect('/sucess');
})

router.get('/sucess', (req, res, next) =>{
    res.send(`<h3> Sucessfull sended</h3>`);
    res.redirect('/');
})

module.exports = router;