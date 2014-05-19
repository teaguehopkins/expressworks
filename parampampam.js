var express = require('express');
var crypto = require('crypto');
var app = express();

app.put('/message/:id', function (req, res){
  var id = req.params.id;
  var myhashObject = crypto.createHash('sha1');
  myhashObject.update(new Date().toDateString().toString() + id);
  myhashObject.digest('hex');
  res.jsonp(myhashObject);
})

app.listen(process.argv[2]);
