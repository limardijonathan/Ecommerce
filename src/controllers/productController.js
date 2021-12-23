const fs = require('fs');
const path = require('path');
const db = require('../database/models')

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
            {productSent: product})
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
        db.Product.update({
			productName:req.body.productName,
			productDescription:req.body.productDescription,
            productImage: req.file.filename,
			productPrice:req.body.productPrice,
			idCategory:req.body.productCategory,
			productOffer:req.body.productOffer,
            productDiscount: req.body.productDiscount
          }, {
            where: { id: req.params.id },
          })
          .then(function (result) {
            res.redirect("/products")
          })

    },
    listProduct:(req,res) =>{
        db.Product.findAll()
        .then(function(products){
            res.render("products/productList.ejs",
            {productsSent: products}) 
        })

    },
    redirect: (req,res)=>{
        res.redirect("/")
    },
    store: (req,res) =>{
            db.Product.create({
                productName:req.body.productName,
                productDescription:req.body.productDescription,
                productImage: req.file.filename,
                productPrice:req.body.productPrice,
                idCategory:req.body.productCategory,
                productOffer:req.body.productOffer,
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