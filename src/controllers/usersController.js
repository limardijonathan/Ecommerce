
const {validationResult} = require('express-validator')
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const db = require('../database/models')


const usersControler={
    register:(req,res)=>{
		res.cookie('testing', 'hola mundo' ,)
        res.render("users/register.ejs")
    },

    login:(req,res)=>{
        res.render("users/login.ejs")
		
		

    },
	
	redirect: (req,res)=>{
        res.render('/')
    },
	
	loginProcess:(req,res)=>{
		 db.User.findOne({
			where:{
				email : req.body.email
			}
		}).then((userToLogin)=>{
			if (userToLogin){
				console.log(userToLogin)
				let isOkThePassword = bcrypt.compareSync(req.body.password, userToLogin.password)
				if (isOkThePassword){
					delete userToLogin.password;
					req.session.userLogged = userToLogin
					if(req.body.checkBox){
						res.cookie('userEmail', req.body.email, {maxAge:(1000 * 60) * 2})
					}
					return res.redirect('/profile')
				} 
			}
				 return res.render('users/login.ejs',{
					errors: {
						email:{
							msg:'Las credenciales son invalidas'
						}
					}				
				})
			
		})
		
		
	},
	
	
	processRegister:(req,res)=>{
        const resultValidation =validationResult(req)
		if(resultValidation.errors.length >0 ){
			console.log(resultValidation.errors)
			return res.render('users/register',{
				errors: resultValidation.mapped(),
				oldData : req.body
			})
		}
        db.User.findOne({
			where:{
				email : req.body.email
			}
		}).then((UserInDb)=>{
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
	

		})
       
	
		db.User.create({
			userName:req.body.userName,
			email:req.body.email,
			password: bcrypt.hashSync( req.body.password ,10),
			image: req.file.filename,
			birthDate: req.body.birthDate

		}).then((user)=>{
			return res.render('users/login.ejs')
			
		})

		 

    },
	
	profile:(req,res)=>{
		return res.render('users/profile.ejs',{
			user: req.session.userLogged	
			})
		}
}
module.exports= usersControler