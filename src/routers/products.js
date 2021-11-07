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


router.get('/',productController.listProduct)
router.get('/create',productController.addProduct);
router.get('/productCart',productController.productCart)
router.get('/:id',productController.productDetail)
router.post('/',upload.single("productImage"),productController.store);
router.get('/:id/edit',productController.editProduct)
router.put('/:id/edit',upload.single("productImage"),productController.update); 
router.delete('/:id',productController.destroy); 


module.exports=router