const express=require("express")

const router= express.Router();

const mainController=require("../controllers/mainController")

router.get('/',mainController.home)
router.get('/register',mainController.register)

router.get('/login',mainController.login)
router.get('/productCart',mainController.productCart)
router.get('/productDetail',mainController.productDetail)
router.get('/addProduct',mainController.addProduct)
router.get('/productList',mainController.listProduct)


module.exports=router