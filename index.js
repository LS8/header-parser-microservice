var express = require('express');
var os = require('os');
var app = express();

// app.enable('trust proxy');
app.set('trust proxy', '127.0.0.1');
app.get('*', function(req, res) {
  var OS = os.type() + ' ' + os.arch();
      lang = req.headers["accept-language"].slice(0, 5),
      ip = req.headers['x-forwarded-for'] || 
           req.connection.remoteAddress || 
           req.socket.remoteAddress ||
           req.connection.socket.remoteAddress;
  var parsedHeader = {
    ipaddress: ip,
    language: lang,
    software: OS
  };
  res.send(JSON.stringify(parsedHeader));
  res.end();
})

app.listen(process.env.PORT || 8080);
