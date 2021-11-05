const fs = require('fs');
const path = require('path');

const express=require("express");
const productsFilePath = path.join(__dirname, '../data/productsData.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const ProductsController={
   
    productCart:(req,res)=>{
        res.render("products/productCart.ejs")
    },productDetail:(req,res)=>{
        const id = req.params.id;    
        const product = products.find(product =>{
			return product.id == id
		})

        res.render("products/productDetail.ejs",{
            productSent: product
        })
    },addProduct:(req,res) =>{
        res.render("products/addProduct.ejs")
    },editProduct:(req,res) =>{
        const id = req.params.id;    
        const product = products.find(product =>{
			return product.id == id
		})
        res.render("products/editProduct",{
            productSent: product
        })
    },
    update:(req,res)=>{let id =req.params.id;
		let productToEdit = products.find(product =>{
			return product.id == id
		})
		let editedProduct={
            id: id, 
			productName:req.body.productName,
			productDescription:req.body.productDescription,
            productImage: req.file ? req.file.filename : productToEdit.productImage,
			productPrice:req.body.productPrice,
			productCategory:req.body.productCategory,
			productOffer:req.body.productOffer,
            productDiscount: req.body.productDiscount
		}
		products.forEach((producto,index) => {
			if (producto.id == id){
				products[index] =editedProduct
			}
			
		})
        fs.writeFileSync(productsFilePath, JSON.stringify(products,null, " "))
		res.redirect("/productList")},
    listProduct:(req,res) =>{
        res.render("products/productList.ejs",
        {productsSent: products})
    },
    redirect: (req,res)=>{
        res.redirect("/")
    }
}

module.exports= ProductsController