var express = require('express');
var router = express.Router();

//该路由使用的中间件
router.use(function timeLog(req,res,next) {
    console.log('Time: ',Date.now());
    next();
})

router.post('/auth/login',(req,res) => {
    console.log(req.body)
})



module.exports = router