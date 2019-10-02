const express = require('express');
const http = require('http');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const adminRoute = require('./routes/admin');
app.use('/admin', adminRoute);

const shopRoute = require('./routes/shop');
app.use(shopRoute);

app.use(bodyParser.urlencoded({extended: false}));

app.use('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);