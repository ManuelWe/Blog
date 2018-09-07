// Get dependencies
const express = require('express');
var SwaggerExpress = require('swagger-express-mw');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

// Get our API routes
const api = require('./server/routes/index');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist/Blog-App')));

// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/Blog-App/index.html'));
});

// Swagger Config
var config = {
  appRoot: __dirname // required config
};


SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 3000;
  app.listen(port);

  //if (swaggerExpress.runner.swagger.paths['/hello']) {
  console.log('try this:\ncurl http://127.0.0.1:' + port + '/hello?name=Scott');
});
module.exports = app; // for testing
