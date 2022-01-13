const UsersControler = require("../controllers/UsersController");
const express = require('express');
const router= express.Router();
const multer = require("multer")

// requires de validaciones 
const registerValidations= require('../middlewares/registerValidations')
const editUserValidations = require('../middlewares/editUserValidations')



//requires de otros middlewares
const guestmiddleware = require('../middlewares/guestmiddleware')
const authMiddleware = require('../middlewares/authmiddleware');
const User = require("../models/User");

const storage = multer.diskStorage({
    destination: function(req, file,cb ){
        cb(null, "./public/img/avatars")
    },
    filename:function(req, file, cb){
        cb (null,  Date.now() + file.originalname) //originalname inculye la exten
    }
})

var upload = multer({ storage: storage,
    fileFilter: function (req, file, cb) {
    if (!file.originalname.match(/\.(pdf|doc|docx|jpg)$/)) {
    return cb(new Error('Error en el tipo de archivo.'));
    }
    cb(null, true);
    }
    });


const uploadfile = multer({storage})

router.get('/register',guestmiddleware, UsersControler.register)
router.get('/profile/', authMiddleware,UsersControler.profile)


router.post('/register', uploadfile.single('image'),registerValidations,UsersControler.processRegister)


router.get('/login', guestmiddleware,UsersControler.login)
router.post('/login',uploadfile.single(''),UsersControler.loginProcess)
router.get('/edit', UsersControler.edituser)
router.put('/edit',uploadfile.single("image"),editUserValidations,UsersControler.update); 


module.exports=router