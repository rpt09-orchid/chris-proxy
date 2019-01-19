const express = require('express');
const morgan = require('morgan');
const path = require('path');
const handleBarsExpress = require('express-handlebars');


const app = express();

const port = process.env.PORT || 3000;

app.use(morgan('dev'));
// for templating
app.engine('html', handleBarsExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/public');


app.get('/:id(\\d+$)*?', (req, res) => {
  debugger;
  res.status(200).render('index', {env_production: (process.env.NODE_ENV === 'production')});
});
app.use('/', express.static(__dirname + '/public/'));


app.listen(port, ()=> {
  console.log(`Proxy Server Running on ${port}`);
})