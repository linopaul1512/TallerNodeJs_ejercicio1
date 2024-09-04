const express = require('express')
const productos  = require('./router')
const bodyParse = require('body-parser')

const app = express()

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({
    extended: true
}))

const port = 8000

app.use('/producto', productos)

app.listen(port, ()=>{
    console.log(`Aplicación funcionando en localhost:${port}`)
})