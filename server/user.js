var express = require('express');
var router = express.Router();
const utils = require('utility')

const model = require('./model')
const User = model.getModel('user')
const _filter = { 'pwd':0, '__v': 0 }

//该路由使用的中间件
router.use(function timeLog(req,res,next) {
    console.log('Time: ',Date.now());
    next();
})

router.post('/login',(req,res) => {
    const { user,pwd } = req.body
    User.findOne({ user,pwd: md5Pwd(pwd)}, _filter,(err,doc) => {
        if (!doc) {
            return res.json({status: 1,message: '账号或密码错误'})
        }
        res.cookie('userid',doc._id)
        return res.status(200).json({status: 0,data: doc})
    })
})
router.post('/register',(req,res) => {
    const {user,pwd} = req.body
    User.findOne({user},(err,doc) => {
        if (doc) {
            return res.json({status:1,message:'用户名已存在'})
        }
        const userModel = new User({user,pwd: md5Pwd(pwd)})
        userModel.save((err,doc) => {
            if (err) {
                return res.json({status:1, message: 'Server error'})
            }
            const {user,_id} = doc
            res.cookie('userId',_id)
            return res.json({status:0,data: {user,_id}})
        })
    })
})

function md5Pwd(pwd) {
    const salt = 'haohaoxuexi@#'
    return utils.md5(utils.md5(pwd+salt))
}

module.exports = router