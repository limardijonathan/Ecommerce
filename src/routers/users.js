const UsersControler = require("../controllers/UsersController");
const express = require('express');
const router= express.Router();
const multer = require("multer")
const {body} = require('express-validator')
const guestmiddleware = require('../middlewares/guestmiddleware')
const authMiddleware = require('../middlewares/authmiddleware')

const storage = multer.diskStorage({
    destination: function(req, file,cb ){
        cb(null, "./public/img/avatars")
    },
    filename:function(req, file, cb){
        cb (null,  Date.now() + file.originalname) //originalname inculye la exten
    }
})

const uploadfile = multer({storage})

router.get('/register',guestmiddleware, UsersControler.register)
router.get('/profile/', authMiddleware,UsersControler.profile)

// proceso del registro
const validations = [
    body('userName').notEmpty().withMessage('Debes escribir un nombre de usuario'),
    body('email').notEmpty().withMessage('Debes escribir un email').bail().isEmail().withMessage('el correo electronico debe ser valido'),
    body('password').notEmpty().withMessage('Debes escibir una constraseña').bail().isLength({min:5, max:15}).withMessage('debe contener entre 5 y 15 caracteres'),
    body('birth-date').notEmpty().withMessage('Debes ingresar tu edad'),
    body ('image').custom((value, {req})=>{
        let file = req.file
        if (!file){
            throw new Error('Tienes que subir una imagen')
        }
        return true;
    })
] 

router.post('/register', uploadfile.single('image'),validations,UsersControler.processRegister)

router.get('/login', guestmiddleware,UsersControler.login)
router.post('/login',uploadfile.single(''),UsersControler.loginProcess)

module.exports=router