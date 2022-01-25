const db = require('../../database/models');
const sequelize = db.sequelize;

const userAPIController ={
    list:(req,res)=>{
        db.User.findAll()
        .then(users=>{
            let respuesta={
                count: users.length,
                users:users.map(user=>{
                    let id={
                        id:user.id,
                        name:user.userName,
                        email:user.email,
                        detail:'http://localhost:5050/api/users/'+user.id
                    }
                    return id
                })
            }
            res.json(respuesta)
        })
    },'detail': (req, res) => {
        db.User.findByPk(req.params.id)
        .then(user=>{
            console.log(user.isAdmin)
            let respuesta={
                id:user.id,
                name: user.userName,
                email:user.email,
                image:'http://localhost:5050/img/avatars/'+ user.image,
                birthDate: user.birthDate,
               
            }
            res.json(respuesta)
        })
    
    
    
    
    }

}





module.exports =userAPIController 
