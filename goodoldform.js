var express = require('express');
var connect = require('connect');
var app = express();

app.set('view engine', 'jade')

app.set('views', process.argv[3]) //views and path to views, in this case supplied by ExpressWorks

app.use(connect.urlencoded());

app.get('/home', function(request, response){
  response.render('index', {date:new Date().toDateString()});
  })

app.post('/form', function(request,response){
  response.end(request.body.str.split('').reverse().join(''));
  })



app.listen(process.argv[2]);
