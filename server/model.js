const mongoose = require('mongoose')

//链接Mongoose并且使用authorized

const DB_URL = 'mongodb://127.0.0.1:27017/authorized'
mongoose.connect(DB_URL)

