/* Se ejecuta
    npm install serialport -> esto es para instalar
    npm run arduino -> esto es para iniciar el programa de arduino, esto ejecutarlo dentro de la carpeta arduino

 */

const SerialPort = require('serialport');

const mySerial = new SerialPort('COM4', {baudRate: 115200});
let pulso = 0;

mySerial.on('open', function () {
    console.log('Opened Serial Port');
});

mySerial.on('data', function (data) {
    pulso = Number(data.toString());

    console.log(pulso);
});

mySerial.on('err', function (err) {
    console.log(err.message);
});
