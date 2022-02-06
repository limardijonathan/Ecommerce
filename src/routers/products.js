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
        cb (null,  Date.now() + file.originalname) //originalname inculye la exten
    }
})

const upload = multer({storage})
const productController=require("../controllers/productController")


const addProductValidations= require('../middlewares/addProductValidations')
const editProductValidations = require('../middlewares/editProductValidations')


router.get('/',productController.listProduct)
router.get('/search',productController.searchProduct)
router.get('/category/:id',productController.listProductCategory)
router.get('/create',productController.addProduct);
router.get('/productCart',productController.productCart)
router.get('/:id',productController.productDetail)
router.post('/',upload.single("productImage"),addProductValidations,productController.store);
router.get('/:id/edit',productController.editProduct)
router.put('/:id/edit',upload.single("productImage"),editProductValidations,productController.update); 
router.delete('/:id',productController.destroy); 


module.exports=router