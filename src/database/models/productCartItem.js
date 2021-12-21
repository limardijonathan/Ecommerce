
module.exports = (sequelize,dataTypes) =>{
    let alias = 'ProductCartItem';
    let cols ={
        id:{
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        idProductCart:{
            type: dataTypes.INTEGER
        },
        idProduct:{
            type: dataTypes.INTEGER
        },
        queantity:{
            type: dataTypes.INTEGER
        } ,
        priceItem:{
            type: dataTypes.DECIMAL
        }
      
       
    
    };
    let config ={
        tableName: 'productCartItem',
        timestamps: false
    }

    const ProductCartItem = sequelize.define(alias,cols,config)
    //aca las asociaciones
    return ProductCartItem
}