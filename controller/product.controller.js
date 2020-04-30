// var db = require('../db');
var Product = require('../model/products.model');

module.exports.index = async (req,res,next) =>{  
  var page = parseInt(req.query.page) || 1; // n
  var perPage = 8;
  var start = (page - 1) * perPage;
  var end = page * perPage;
 
  var drop = (page - 1) * perPage

  var products = await Product.find();
  var numProducts = await Product.estimatedDocumentCount();
  var productsPerPage = await Product.find(null,null,{skip: drop}).limit(perPage);

    res.render('products/index',{
      //products: db.get('products').value().slice(start, end)
      
      // products: db.get('products').drop(drop).take(perPage).value();
      products: productsPerPage,
      page: page,
      total: numProducts
    });  
};