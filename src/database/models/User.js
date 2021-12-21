
module.exports = (sequelize,dataTypes) =>{
    let alias = 'User';
    let cols ={
        id:{
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        userName:{
            type: dataTypes.STRING(255)
        },
        email:{
            type: dataTypes.STRING(255)
        },  
       password:{
            type: dataTypes.STRING(255)
        },
        image:{
            type: dataTypes.BLOB
        },
        birthDate:{
           type: dataTypes.DATE
        },
        isAdmin:{
            type:  dataTypes.STRING.BINARY
        },
       
    
    };
    let config ={
        tableName: 'user',
        timestamps: true
    }

    const User = sequelize.define(alias,cols,config)
    //aca las asociaciones
    return User
}