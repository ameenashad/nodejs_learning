const express = require('express');
const http = require('http');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));

const adminData = require('./routes/admin');
app.use('/admin', adminData.routes);

const shopRoute = require('./routes/shop');
app.use(shopRoute);

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', (req, res, next) => {
  res.status(404).render('404', {title: "Page not found"});
});

app.listen(3000);