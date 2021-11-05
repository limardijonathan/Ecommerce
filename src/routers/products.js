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

router.get('/',mainController.listProduct)
router.get('/productCart',mainController.productCart)
router.get('/:id',mainController.productDetail)
router.get('/addProduct',mainController.addProduct)
router.get('/:id/edit',mainController.editProduct)
router.put('/:id/edit',upload.single("newProductImage"),mainControler.update); 



module.exports=router