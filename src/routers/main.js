const express=require("express");
const router= express.Router();
const mainControler = require("../controllers/mainController");


router.get('/',mainControler.home)
router.get('/sendConditions',mainControler.sendConditions)
router.get('/howToBuy',mainControler.howToBuy)
router.get('/promotions',mainControler.promotions)
router.get('/legals',mainControler.legals)
router.get('/regrets',mainControler.regrets)




module.exports=router