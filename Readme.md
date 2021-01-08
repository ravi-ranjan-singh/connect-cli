# Connect-Cli

## Initial Setup

- Go to **client** directory and run the following command in bash or cmd.
  ```bash
  npm i
  ```
- Go to **server** directory and run
  ```bash
  npm i
  ```

_This will install all the dependencies required for creating and install cli_

## Installing CLI

- Go to the client directory and run the following command

  ```bash
  npm i -g
  ```

_This will install the cli tool to your system_

## About Server file

- Go to the server directory and run the following command
  ```bash
  npm start
  ```

This command will start the server. It is the one that continuously need to run on **server computer system** (Linux or window) and clients with the help of cli will connect to this server

## About Files directory

The server directory consists of a Files directory which contains two Files.

- **logs.log File**: It consists of all the logs of the server system. Most of the output will be stored in this file rather than being displayed.

- **messages.json File**: All messages sent to the server are saved in messages.json file with the socket id of the person sending them

## About Demo Directory

It consist of two files:

- **demo.js** : script to run demo of the app
- **message.txt** : consists of commands and messages for demo purposes.

The demo file can be run by the following command:

```bash
node demo.js
```

On running this command it will randomly select any one command or message out of 10 from message.txt and will run it using connect-cli

## Using CLI

The CLI has the following command available:

```bash
connect-cli -m "Hello, how are you"
```

_This command will send a message to the server and it will be stored in messages.json file_

```bash
connect-cli -i "ls"
```

_This command will run a particular command on the server_

**Important point**: The command given to run on the server should be according to the operating system running on server.

Example :

- "ls" command work only on linux and mac and not on window
- "dir" command work on window only

```bash
connect-cli -V
```

_This command will show the version of the current app_

```bash
connect-cli -h
```

_This command will show all the help option of the app_

## Some Notable features

- It uses RSA encryption for encrypting messages and command send to the server for secure transmission.

- It uses a single child process and process queue for handling multiple user requests.The queue is based on a first come first serve basis.

- It uses web sockets for realtime communication

- The server provides acknowledgment for both success and failure of the process.
