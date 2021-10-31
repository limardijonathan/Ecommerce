const express=require("express")

const router= express.Router();

const mainController=require("../controllers/mainController")

router.get('/',mainController.home)
router.get('/register',mainController.register)


router.post('/register',mainController.redirect)

router.get('/login',mainController.login)

router.post('/login',mainController.redirect)
router.get('/productCart',mainController.productCart)
router.get('/productDetail/:id',mainController.productDetail)
router.get('/addProduct',mainController.addProduct)
router.get('/editProduct',mainController.editProduct)
router.get('/productList',mainController.listProduct)


module.exports=router