const fs = require('fs');
const path = require('path');
const db = require('../database/models')
const {validationResult} = require('express-validator')

const productsFilePath = path.join(__dirname, '../data/productsData.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const ProductsController={
   
    productCart:(req,res)=>{
        res.render("products/productCart.ejs")
    },productDetail:(req,res)=>{
        db.Product.findOne({
			where:{
				id : req.params.id
			}
		}).then(function(product){
            
            res.render("products/productDetail.ejs",
            {productSent: product,user:req.session.userLogged})
        }) 

    },addProduct:(req,res) =>{
        res.render("products/addProduct.ejs")
    },editProduct:(req,res) =>{
        db.Product.findOne({
			where:{
				id : req.params.id
			}
		}).then(function(product){
            
            res.render("products/editProduct",
            {productSent: product})
        })
    },
    update:(req,res)=>{
        const resultValidation =validationResult(req)
        db.Product.findOne({
			where:{
				id : req.params.id
			}
        }).then(function(product){
		if(resultValidation.errors.length >0 ){
			return res.render('products/editProduct.ejs',{
				errors: resultValidation.mapped(),
				oldData : req.body,
                productSent: product

			})
		}
        else{
            db.Product.update({
                productName:req.body.productName,
                productDescription:req.body.productDescription,
                //productImage: req.file.filename,
                productPrice:req.body.productPrice,
                idCategory:req.body.productCategory,
                productDiscount: req.body.productDiscount
              }, {
                where: { id: req.params.id },
              })
              .then(function (result) {
                res.redirect("/products")
              })
    
        }})
    },
    listProduct:(req,res) =>{
        db.Product.findAll({
            include :['category']
        })
        .then(function(products){
           
            res.render("products/productList.ejs",
            {productsSent: products,user:req.session.userLogged}) 
        })

    },    
    listProductCategory:(req,res) =>{
        db.Category.findOne({
            where:{
                idCategory : req.params.id
            },
        }).then(function(category){
            db.Product.findAll({
                where: {
                    idCategory : req.params.id
                },
            })
            .then(function(products){
                res.render("products/productListByCategory.ejs",
                {productsSent: products,
                categorySent: category}) 
            })
    
        })

    },searchProduct:(req,res) =>{
            db.Product.findAll({
                where: {
                    productName :  req.query.search 
                },
            })
            .then(function(products){
                res.render("products/productListByName.ejs",
                {productsSent: products}) 
            })
    },
    redirect: (req,res)=>{
        res.redirect("/")
    },
    store: (req,res) =>{
        const resultValidation =validationResult(req)
		if(resultValidation.errors.length >0 ){
			return res.render('products/addProduct.ejs',{
				errors: resultValidation.mapped(),
				oldData : req.body
			})
		}

            db.Product.create({
                productName:req.body.productName,
                productDescription:req.body.productDescription,
                productImage: req.file.filename,
                productPrice:req.body.productPrice,
                idCategory:req.body.productCategory,
                productDiscount: req.body.productDiscount     

            }).then((user)=>{
                res.redirect("/products")			
            })
		},
    destroy:(req,res) =>{
        db.Product.destroy({
            where: {
                id : req.params.id

            },
          }).then(()=>{
            res.redirect("/products")			
        })        
    },
}

module.exports= ProductsController