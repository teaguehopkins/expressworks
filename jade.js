var express = require('express');
var app = express();

app.set('view engine', 'jade')

app.set('views', process.argv[3]) //views and path to views, in this case supplied by ExpressWorks

app.get('/home', function(request, response){
  response.render('index', {date:new Date().toDateString()});
  })

app.listen(process.argv[2]);
