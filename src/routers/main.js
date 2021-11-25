const express=require("express");
const router= express.Router();
const mainControler = require("../controllers/mainController");


router.get('/',mainControler.home)




module.exports=router