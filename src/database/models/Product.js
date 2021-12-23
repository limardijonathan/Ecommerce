
module.exports = (sequelize,dataTypes) =>{
    let alias = 'Product';
    let cols ={
        id:{
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        productName:{
            type: dataTypes.STRING(255)
        },
        productDescription:{
            type: dataTypes.STRING(1024)
        },
        productImage:{
            type: dataTypes.BLOB
        },
        productPrice:{
            type: dataTypes.DECIMAL(10, 2)
        },
        idCategory:{
           type: dataTypes.BIGINT(10).UNSIGNED
        },
        productOffer:{
            type:  dataTypes.STRING.BINARY
        },
        productDiscount:{
            type: dataTypes.INTEGER
        }
    
    };
    let config ={
        tableName: 'product',
        timestamps: false
    }

    const Product = sequelize.define(alias,cols,config)
    //aca las asociaciones
    return Product
}