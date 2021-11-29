function userLoggedMiddleware( req, res, next){
    res.locals.isLoged= false //se aplica en toda la aplicacion
    if (req.session.userLogged){
            res.locals.isLoged= true
            res.locals.userLoged = req.session.userLogged
        }
    next()
}

module.exports= userLoggedMiddleware