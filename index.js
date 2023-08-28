const express = require('express');
const path = require('path');

//create app
const app = express();
const port = 3013;

//set up static folder, body parser & view engine
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('pages/home');
});

app.get('/partners', (req, res) => {
  res.render('pages/partners');
});

app.get('/services', (req, res) => {
  res.render('pages/services');
});

//run the web app
app.listen(port, () => {
  console.log(`PzWebApp runing at http://localhost:${port}/`);
});
