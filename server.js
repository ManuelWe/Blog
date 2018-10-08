// Get dependencies
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = require('connect')();
const serveStatic = require('serve-static');
const swaggerTools = require('swagger-tools');
const jsyaml = require('js-yaml');
const serverPort = 3000;

const cors = require('cors');

// TODO remove allow cors
app.use(cors());


// Parsers for POST data
app.use(bodyParser.json({limit: '2mb'}));
app.use(bodyParser.urlencoded({limit: '2mb', extended: true}));

// Point static path to dist
app.use(serveStatic(path.join(__dirname, 'dist/Frontend-App')));


// swaggerRouter configuration
const options = {
  swaggerUi: path.join(__dirname, '/SwaggerBackend/swagger.json'),
  controllers: path.join(__dirname, './SwaggerBackend/controllers'),
  useStubs: process.env.NODE_ENV === 'development', // Conditionally turn on stubs (mock mode)
};

// The Swagger document (require it, build it programmatically, fetch it from a URL, ...)
const spec = fs.readFileSync(path.join(__dirname, 'SwaggerBackend/api/swagger.yaml'), 'utf8');
const swaggerDoc = jsyaml.safeLoad(spec);

// Initialize the Swagger middleware
swaggerTools.initializeMiddleware(swaggerDoc, function(middleware) {
  // Interpret Swagger resources and attach metadata to request -
  // must be first in swagger-tools middleware chain
  app.use(middleware.swaggerMetadata());

  // Validate Swagger requests
  app.use(middleware.swaggerValidator());

  // Route validated requests to appropriate controller
  app.use(middleware.swaggerRouter(options));

  // Serve the Swagger documents and Swagger UI
  app.use(middleware.swaggerUi());

  // Start the server, if not in testing mode
  if (!module.parent) {
    http.createServer(app).listen(serverPort, function() {
      console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
      console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
    });
  }
});

module.exports = app; // for testing
