/* Se ejecuta
    npm install serialport -> esto es para instalar
    npm instsall express -> esto es para instalar
    npm install socket.io -> enviar datos a los clientes de un server
    npm run arduino -> esto es para iniciar el programa de arduino

 */

const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const app = express();
const server = http.createServer(app);
const io = socketIO.listen(server);

/*
io.on('connection', function (socket) {
   console.log('a new socket connected');
});

app.get('/', (req, res, next) => {
    res.sendfile('src/app/addmedicalcheck/addmedicalcheck.page.html');

});*/

const SerialPort = require('serialport');
const Readline = SerialPort.parsers.Readline;
const parser = new Readline();

const mySerial = new SerialPort('COM4', {baudRate: 9600});

mySerial.on('open', function () {
    console.log('Opened Serial Port');
});

mySerial.on('data', function (data) {
    console.log(data.toString());
});

mySerial.on('err', function (err) {
    console.log(err.message);
});

/*
server.listen(3000, () => {
   console.log('server on port', 3000);
});
*/

