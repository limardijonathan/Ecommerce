// ************ Require's ************

const express= require("express")
const session= require("express-session")
let path = require('path')
const userLoggedMiddleware =require('./middlewares/userLoggedMiddleware')
const mainRouter =require("./routers/main")
const UserRouter = require("./routers/users")
const ProductsRouter =require("./routers/products")
const apiProductRouter= require('./routers/api/products')
const apiUserRouter= require('./routers/api/users')
const methodOverride=require("method-override")
const cookie = require("cookie-parser")
const cors = require('cors')



// ************ express()************

const app =express()


// ************ Template Engine  ************
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "./views"))


// ************ Middlewares ************
const publicPath = path.join(__dirname,'../public')
app.use(express.static(publicPath))
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use (methodOverride("_method"))
app.use(cors())

app.use(session({
    secret: "Shh, it's a secret",
    resave: false,
    saveUninitialized: false,
}))
app.use(cookie())
app.use(userLoggedMiddleware)




app.listen(5050, ()=>{
    console.log('funciona en http://localhost:5050/' )
})


app.use("/", mainRouter)
app.use("/", UserRouter)
app.use("/products", ProductsRouter)
app.use('/api',apiProductRouter )
app.use('/api',apiUserRouter )







