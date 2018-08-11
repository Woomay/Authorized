var express = require('express');
var router = express.Router();

const model = require('./model')

//该路由使用的中间件
router.use(function timeLog(req,res,next) {
    console.log('Time: ',Date.now());
    next();
})

router.post('/login',(req,res) => {
    res.send('Got a POST request');
})



module.exports = router