const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser') 

const Router = require('./user')
const app = express();

app.use(cookieParser())
app.use(bodyParser.json())
app.use('/api',Router)
app.listen(3000,() => {
    console.log('Server is running at 3000 port...')
})