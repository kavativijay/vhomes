var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var config = require('./config.js');

var http = require('http')
var https = require('https')
var app = express();
var serveStatic = require('serve-static')
var fs = require('fs')
var expressLayouts = require('express-ejs-layouts');
var index = require('./routes/index');



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html'); 
app.engine('html', require('ejs').renderFile);
app.set('layout',"index.html")

app.set("layout extractScripts", true)
app.use(expressLayouts);


app.use(serveStatic(__dirname + '/public'))

// app.use(express.static(__dirname + '/public'));

app.use('/', index);

// var sslOptions = {
//   key  : fs.readFileSync(config.ssl.key),
//   cert : fs.readFileSync(config.ssl.crt),
//   ca: [
//     fs.readFileSync(config.ssl.ATE)
//   ]
// };

var server = http.createServer(app);
// var secureserver = https.createServer(sslOptions,app);


server.listen(config.http_port,function(){
  console.log("server listening to "+config.http_port+" port")
});
// secureserver.listen(config.https_port,function(){
//   console.log("httpsserver listening to "+config.https_port+" port")
// });