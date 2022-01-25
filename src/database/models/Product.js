
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
            type: dataTypes.STRING(255)
        },
        productPrice:{
            type: dataTypes.DECIMAL(10, 2)
        },
        idCategory:{
           type: dataTypes.BIGINT(10).UNSIGNED
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
    Product.associate = function (models) {
        Product.belongsTo(models.Category, { 
            as: "category",
            foreignKey: "idCategory"
        })}
    return Product
}