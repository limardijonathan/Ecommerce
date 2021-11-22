
const {validationResult} = require('express-validator')
const User = require('../models/User')
const bcrypt = require('bcryptjs')


const usersControler={
    register:(req,res)=>{
        res.render("users/register.ejs")
    },
    login:(req,res)=>{
        res.render("users/login.ejs")
    },redirect: (req,res)=>{
        res.render('/')
    },
    processRegister:(req,res)=>{
       
        const resultValidation =validationResult(req)
		if(resultValidation.errors.length >0 ){
			return res.render('users/register',{
				errors: resultValidation.mapped(),
				oldData : req.body
			})
		}
        let UserInDb = User.findByField('email', req.body.email)
        if(UserInDb){
            return res.render('users/register',{
				errors: {
					email:{
						msg:'Este email ya esta registrado'
					}
					
				},
				oldData :req.body
			})
		}

		let userToCreate={
			...req.body,
			password: bcrypt.hashSync( req.body.password ,10),
			image: req.file.filename
		}
		User.create(userToCreate)

		return res.render('index/home.ejs')

        }
         
        
    
}
module.exports= usersControler