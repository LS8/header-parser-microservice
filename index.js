var express = require('express');
var app = express();

app.get('*', function(req, res) {
  var OS = req.headers["user-agent"].split("(")[1].split(")")[0],
      lang = req.headers["accept-language"].slice(0, 5),
      ip = req.headers['x-forwarded-for'] || 
           req.connection.remoteAddress || 
           req.socket.remoteAddress ||
           req.connection.socket.remoteAddress;
  var parsedHeader = {
    ipaddress: ip,
    language: lang,
    OS: OS
  };
  console.log(OS);
  res.send(JSON.stringify(parsedHeader));
  res.end();
})

app.listen(process.env.PORT || 8080);
