const socktIO = require('socket.io');
const socketController = require('./Controllers/socketController');
const rsaController = require('./Controllers/rsaController');
const logController = require('./Controllers/logcontroller');

const { publicKey, privateKey } = rsaController.generateKeys();

const processQueue = [];

module.exports = (server) => {
  const io = socktIO(server);

  io.on('connection', (socket) => {
    process.env.privateKey = privateKey;
    logController.log(`client connected with socketID ${socket.id}`);
    io.emit('init', publicKey);

    socket.on('message', (msg, fn) =>
      socketController.handleMsg(msg, fn, socket, io)
    );

    socket.on('command', (cmd, fn) => {
      processQueue.unshift({ cmd: cmd, fn });
      socketController.handleCmd(processQueue, socket, io);
    });
  });
};
