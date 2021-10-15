const express= require("express")

const app =express()

let path = require('path')

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "./src/views"))

const publicPath = path.join(__dirname,'./public')
app.use(express.static(publicPath))

const mainRouter =require("./src/routers/main")
app.listen(5050, ()=>{
    console.log('funciona en http://localhost:5050/' )
})

app.use("/", mainRouter)


app.post('/login',(req,res)=>{
    res.redirect("/home")
})

app.post('/register',(req,res)=>{
    res.redirect("/home")
})
