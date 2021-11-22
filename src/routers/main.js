

const router= express.Router();

const mainControler = require("../controllers/mainController");


router.get('/',mainController.home)




module.exports=router