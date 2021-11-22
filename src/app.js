const express= require("express")

const app =express()

let path = require('path')

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "./views"))

const publicPath = path.join(__dirname,'../public')
app.use(express.static(publicPath))

const mainRouter =require("./routers/main")
const UserRouter = require("./routers/users")
const ProductsRouter =require("./routers/products")
app.listen(5050, ()=>{
    console.log('funciona en http://localhost:5050/' )
})
const methodOverride=require("method-override")
app.use (methodOverride("_method"))
app.use("/", mainRouter)
app.use("/", UserRouter)
app.use("/products", ProductsRouter)

app.use(express.urlencoded({extended:false}))
app.use(express.json())


