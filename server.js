const express = require('express')
const app = express()

app.set('view engine','ejs')

//static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))

//server listens
app.listen(3000)

app.get('/',(req,res)=>{
    res.render('index')

})
