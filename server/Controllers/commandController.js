const { execSync } = require('child_process');
const logController = require('./logcontroller');

module.exports = async (cmd, callback) => {
  try {
    logController.log(cmd.toString());
    let data = execSync(cmd).toString();
    logController.log(data);
    callback({
      msg: 'Operation Successful',
      data,
    });
  } catch (error) {
    let data = error.output.toString().split(',').slice(2).join();
    logController.log(data);
    callback({ msg: 'Operation unsuccessful', data });
  }
};
