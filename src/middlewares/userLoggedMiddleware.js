const User = require('../models/User')

function userLoggedMiddleware( req, res, next){
    res.locals.isLoged= false //se aplica en toda la aplicacion

    let emailCookie = req.cookies.userEmail
    let userFromCookie = User.findByField('email' , emailCookie)
    
    if(userFromCookie){
        req.session.userLogged = userFromCookie
    }



    if (req.session.userLogged){
            res.locals.isLoged= true
            res.locals.userLoged = req.session.userLogged
        }

   
    
    
    next()
}

module.exports= userLoggedMiddleware