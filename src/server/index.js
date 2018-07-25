const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const expressGraphQL = require('express-graphql');
const logger = require('./logger');
const schema = require('./graphql/schema');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.HTTP_PORT = process.env.HTTP_PORT || 3000;

const isDevelopment = process.env.NODE_ENV === 'development';

const errorLog = err => {
  try {
    logger.error(err);
  } catch (e) {
    console.log('LOGGER ERROR:', e); // eslint-disable-line no-console
    console.log('APPLICATION ERROR:', err); // eslint-disable-line no-console
  }
  process.exit(1);
};

// Log error
process.on('unhandledRejection', errorLog);
process.on('uncaughtException', errorLog);

const applyMiddlewares = isDevelopment
  ? require('./middlewares/development')
  : require('./middlewares/production');

const app = express();

app.set('env', process.env.NODE_ENV);
logger.info(`Application env: ${process.env.NODE_ENV}`);

app.use(
  '/graphql',
  expressGraphQL({
    schema,
    graphiql: isDevelopment,
    formatError: error => ({
      message: error.message,
      state: error.originalError && error.originalError.state,
      locations: error.locations,
      path: error.path
    })
  })
);

app.use(logger.expressMiddleware);
app.use(bodyParser.json());

// application routes
applyMiddlewares(app);

http.createServer(app).listen(process.env.HTTP_PORT, () => {
  logger.info(`Web server is now running on http://localhost:${process.env.HTTP_PORT}`);
});
