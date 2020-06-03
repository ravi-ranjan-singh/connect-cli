const runIntruct = require('./commandController');
const rsaController = require('./rsaController');
const logController = require('./logcontroller');

exports.handleMsg = (msg, fn, socket, io) => {
  const message = rsaController.decryptedData(msg, process.env.privateKey);
  logController.saveMessages(message, socket.id);
  fn();
  socket.emit('close');
};

exports.handleCmd = (processQueue, socket, io) => {
  processQueue.forEach((pro) => {
    const instruction = rsaController.decryptedData(
      pro.cmd,
      process.env.privateKey
    );
    runIntruct(instruction, pro.fn);
    processQueue.pop();
  });

  socket.emit('close');
};
