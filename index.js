var express = require('express');
var app = express();

// app.enable('trust proxy');
app.set('trust proxy', '127.0.0.1');
app.get('*', function(req, res) {
  var OS = req.headers["user-agent"],
      lang = req.headers["accept-language"].slice(0, 5);
  var parsedHeader = {
    ipaddress: req.ip,
    language: lang,
    software: OS
  };
  res.send(JSON.stringify(parsedHeader));
  res.end();
})

app.listen(3000);
