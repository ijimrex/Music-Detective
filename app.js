/**
 * Created by leijin on 3/17/17.
 */
const express = require('express')
const app = express()
const index = require('./router/index')

// app.use('/',index)
app.use('/',(req,res) => {
  res.send('Hi!')
})
app.listen(3000,() => {
  console.log('app listening on port 3000.')
})
