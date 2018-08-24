const mongoose = require('mongoose')

// 链接Mongoose并且使用authorized集合
const DB_URL = 'mongodb://127.0.0.1:27017/authorized'
mongoose.connect(DB_URL,(err) => {
    if(!err) {
        console.log('Connected to MongoDB')
    } else {
        throw err
    }
})

const models = {
  user: {
    'user': {'type': String, require: true},
    'pwd': {'type':String, require: true}
  },
  chat: {}
}

for(let m in models) {
  mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
  getModel: function(name) {
    return mongoose.model(name)
  }
}
