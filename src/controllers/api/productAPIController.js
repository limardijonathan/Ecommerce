const db = require('../../database/models');
const sequelize = db.sequelize;

const productAPIController ={
    list: (req, res)=>{
        db.Product.findAll({
            include: ['category']
        })
         .then(products => {
             let contBlanco= 0
             let contTinto = 0
             let contRosado =0
             let contDulces =0
             let contEspumantes =0

             products.map((product)=>{
                 if (product.category.categoryName=='Blanco'){
                    contBlanco=contBlanco+1
                 }
                 if (product.category.categoryName=='tinto'){
                    contTinto=contTinto+1
                 }
                 if (product.category.categoryName=='Rosado'){
                    contRosado=contRosado+1
                 }
                 if (product.category.categoryName=='Dulces'){
                    contDulces=contDulces+1
                 }
                 if (product.category.categoryName=='Espumantes'){
                    contEspumantes=contEspumantes+1
                 }
             })

            let respuesta ={
                count: products.length,
                CountCategory: products.countByCategory,
                countByCategory:{
                    Blanco: contBlanco,
                    Tinto: contTinto,
                    Rosado: contRosado,
                    Dulces: contDulces,
                    Espumantes: contEspumantes
                },
                products:products.map(product => {
                    let id= {
                        id: product.id,
                        name: product.productName,
                        description: product.productDescription,
                        category: product.category.categoryName,
                        detail: '/api/products/'+ product.id,
                        image:'http://localhost:5050/img/products/'+ product.productImage
                        
                    }
                    return id
                })

            }
             res.json(respuesta);
            })
    },
    'detail': (req, res) => {
        db.Product.findByPk(req.params.id,
            {
                include : ['category']
            })
           
            .then(product => {
                let respuesta = {
                    name: product.productName,
                    description:product.productDescription,
                    //image:product.productImage,
                    price: product.productPrice,
                    category: product.category.categoryName,
                    discount:product.productDiscount

                    
                }
                res.json(respuesta);
            });
    },
    
}

module.exports =productAPIController 