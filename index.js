const express = require('express');
const ejsLayouts = require('express-ejs-layouts');

const app = express();

app.set('view engine', 'ejs');
app.use(ejsLayouts);

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/animals', (req, res) => {
  res.render('animals', {animals: ['sand crab', 'corny joke dog']})
});

app.listen(3000);