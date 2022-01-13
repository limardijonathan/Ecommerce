const {body} = require('express-validator')

const validations = [
    body('productName').notEmpty().withMessage('Debes escribir el nombre del producto').bail().isLength({min:5, max:25}).withMessage('El nombre debe tener 5 caracteres o mas'),
    body('productDescription').notEmpty().withMessage('Debes escribir una descripcion del producto').bail().isLength({min:20 , max: 200}).withMessage('La descripcion debe tener 20 caracteres o mas'),
    body('productCategory').notEmpty().withMessage('El producto tiene que tener una categoria'),
    body('productPrice').notEmpty().withMessage('Debes ingresar el precio del producto'),
    
] 

module.exports = validations