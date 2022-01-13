const {body} = require('express-validator')

const validations = [
    body('userName').notEmpty().withMessage('Debes escribir un nombre de usuario').bail().isLength({min:2, max:25}).withMessage('Debes escribir un nombre de usuario con al menos 2 caracteres'),
    body('email').notEmpty().withMessage('Debes escribir un email').bail().isEmail().withMessage('el correo electronico debe ser valido'),
    body('password').notEmpty().withMessage('Debes escibir una constraseña').bail().isLength({min:8, max:15}).withMessage('debe contener entre 8 y 15 caracteres'),
    body('birthDate').notEmpty().withMessage('Debes ingresar tu edad'),
    body ('image').custom((value, {req})=>{
        let file = req.file
        if (!file){
            throw new Error('Tienes que subir una imagen')
            // hacer que la imagen sea de un formato determinado ?? 
        }
        return true;
    })
] 

module.exports = validations