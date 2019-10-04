const express = require('express');
const router = express.Router();
const adminData = require('./admin');
const path = require('path');

router.get('/', (req, res, next) => {
  // res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
  const products = adminData.products;
  res.render('shop', {prods: products, docTitle: 'Ameena'});
});

module.exports = router;