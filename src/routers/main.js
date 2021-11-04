const express=require("express")

const router= express.Router();
const multer =require ("multer")
const path = require("path");
const mainControler = require("../controllers/mainController");
const storage = multer.diskStorage({
    destination: function(req, file,cb ){
        cb(null, "./public/img/products")
    },
    filename:function(req, file, cb){
        cb (null, Date.now() + file.originalname) //originalname inculye la exten
    }
})

const upload = multer({storage})
const mainController=require("../controllers/mainController")

router.get('/',mainController.home)
router.get('/register',mainController.register)


router.post('/register',mainController.redirect)

router.get('/login',mainController.login)

router.post('/login',mainController.redirect)
router.get('/productCart',mainController.productCart)
router.get('/productDetail/:id',mainController.productDetail)
router.get('/addProduct',mainController.addProduct)
router.get('/editProduct/:id',mainController.editProduct)
router.put('/editProduct/:id/',upload.single("newProductImage"),mainControler.update); 
router.get('/productList',mainController.listProduct)


module.exports=router