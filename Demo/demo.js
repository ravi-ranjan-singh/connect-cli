const { execSync } = require('child_process');
const fs = require('fs');

let messages = fs.readFileSync('message.txt', 'utf-8');
messages = messages.split(',');
const msg = messages[Math.floor(Math.random() * 10)];
try {
  let output = execSync(msg);
  console.log(output.toString());
} catch (error) {
  console.log(error);
}

process.exit();
