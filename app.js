/**
 * Created by leijin on 3/17/17.
 */
const express = require('express')
const app = express()
app.use('/',(req,res) => {
  res.send('Hi!')
})
app.listen(3000,() => {
  console.log('app listening on port 3000.')
})
