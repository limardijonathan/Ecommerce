const express= require("express")

const app =express()

let path = require('path')

app.set("view engine", "ejs")

const publicPath = path.join(__dirname,'./public')
app.use(express.static(publicPath))

const mainRouter =require("./src/routers/main")
app.listen(5050, ()=>{
    console.log('funciona en http://localhost:5050/home' )
})

app.use("/", mainRouter)

/* app.get('/login', (req,res) =>{
    res.sendFile(path.join(__dirname,'/views/login.ejs'))
})


app.get('/register', (req,res) =>{
    res.sendFile(path.join(__dirname,'/views/register.ejs'))
})

app.get('/productCart', (req,res) =>{
    res.sendFile(path.join(__dirname,'/views/productCart.ejs'))
})
app.get('/productDetail', (req,res) =>{
    res.sendFile(path.join(__dirname,'/views/productDetail.ejs'))
})
app.get('/home', (req,res) =>{
    res.sendFile(path.join(__dirname,'/views/home.ejs'))
})
 */



app.post('/login',(req,res)=>{
    res.redirect("/home")
})

app.post('/register',(req,res)=>{
    res.redirect("/home")
})
