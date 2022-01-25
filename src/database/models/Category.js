
module.exports = (sequelize,dataTypes) =>{
    let alias = 'Category';
    let cols ={
        idCategory:{
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        categoryName:{
            type: dataTypes.STRING(255)

        }
      
       
    
    };
    let config ={
        tableName: 'category',
        timestamps: false
    }

    const Category = sequelize.define(alias,cols,config)
    Category.associate = function(models) {
        Category.hasMany(models.Product, { 
            as: "products", 
            foreignKey: "idCategory"
        })
    }
    return Category
}