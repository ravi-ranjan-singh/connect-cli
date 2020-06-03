const fs = require('fs');
const path = require('path');

exports.saveMessages = (msg, id) => {
  fs.readFile(
    `${path.join(__dirname, './../Files/messages.json')}`,
    'utf-8',
    (err, data) => {
      let messages = JSON.parse(data);
      messages.push({ msg, id });
      fs.writeFile(
        `${path.join(__dirname, './../Files/messages.json')}`,
        JSON.stringify(messages),
        (err) => {
          if (!err) {
            this.log('message saved successfully');
          } else {
          }
        }
      );
    }
  );
};

exports.log = (msg) => {
  let dataString = `${new Date()
    .toString()
    .split(' ')
    .slice(0, 5)
    .join()}   ---->  ${msg}\n\n`;
  fs.appendFile(
    `${path.join(__dirname, './../Files/logs.log')}`,
    dataString,
    'utf8',
    (err) => {
      if (err) throw err;
    }
  );
};
