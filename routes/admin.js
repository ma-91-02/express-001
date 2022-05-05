const path = require("path");
const express = require("express");
const rootDir = require("../util/path");

const router = express.Router();

const products = [];

/***********************************
 ***   /admin/add-product =>GET   ***
 ************************************/
router.get("/add-product", (req, res, next) => {
  //   res.sendFile(path.join(rootDir, "views", "add-product.html"));
  res.render('add-product', { 
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
});

/*************************************
 ***   /admin/add-product => POST   ***
 *************************************/
router.post("/add-product", (req, res, next) => {
  const obj = JSON.parse(JSON.stringify(req.body.title));
  //   console.log(obj);
  products.push({ title: obj });
  console.log(products);
  //   console.log(products);
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
