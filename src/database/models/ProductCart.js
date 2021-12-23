
module.exports = (sequelize,dataTypes) =>{
    let alias = 'ProductCart';
    let cols ={
        id:{
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        idUser:{
            type: dataTypes.INTEGER
        },
        quantity:{
            type: dataTypes.INTEGER
        },  
       totalprice:{
            type: dataTypes.DECIMAL
        }
      
       
    
    };
    let config ={
        tableName: 'productCart',
        timestamps: false
    }

    const ProductCart = sequelize.define(alias,cols,config)
    //aca las asociaciones
    return ProductCart
}