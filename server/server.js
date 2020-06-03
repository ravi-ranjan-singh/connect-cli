const http = require('http');
const socketServer = require('./socketServer');
const logController = require('./Controllers/logcontroller');

const server = http.createServer();

const PORT = process.env.port || 3000;

server.listen(PORT, () => {
  logController.log('server has started');
});

socketServer(server);
