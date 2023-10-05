const express = require('express')
// const bodyParser=require('body-parser')
const mongoose = require('mongoose')
const cors=require('cors')
const url = 'mongodb+srv://marka:atlas9121195638@cluster0.ki58fxe.mongodb.net/'
const app = express()
mongoose.connect(url)
const con = mongoose.connection
con.on('open', () =>
{
console.log('connected...')
})
app.use(cors())
// app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
const alienRouter = require('./routes/aliens')
app.use('/aliens',alienRouter)
app.listen(4000, () =>
{
console.log('Server started')
})