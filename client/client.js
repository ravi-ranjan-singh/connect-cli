#!/usr/bin/env node
const Client = require('socket.io-client');
const crypto = require('crypto');
const { program } = require('commander');

const socket = Client('http://localhost:3000');
let publicKey = '';
program.version('1.0.0');
program
  .option('-m, --message <message>', 'send a message to server')
  .option('-i, --instruction <instruction>', 'run a command on server');

program.parse(process.argv);

encryptedData = (data, publicKey) =>
  crypto.publicEncrypt(
    {
      key: publicKey,
      padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
      oaepHash: 'sha256',
    },
    Buffer.from(data)
  );

socket.on('init', (key) => {
  publicKey = key;
  if (program.message) {
    let msg = encryptedData(program.message, publicKey);
    socket.emit('message', msg, () => {
      console.log('message sent successfully');
    });
  }
  if (program.instruction) {
    let instruction = encryptedData(program.instruction, publicKey);
    socket.emit('command', instruction, (output) => {
      console.log(output.data);
    });
  }
  socket.on('close', () => {
    socket.close();
  });
});
