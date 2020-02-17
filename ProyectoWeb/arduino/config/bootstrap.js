/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */
const axios = require('axios'); //npm install axios
const SerialPort = require('serialport');

const mySerial = new SerialPort('COM3', {baudRate: 115200});
let pulso = 0;
let respuestaHTTP;

mySerial.on('open', function () {
  console.log('Opened Serial Port');
});

mySerial.on('data', async function (data) {
  pulso = Number(data.toString());

  console.log('pulso:', pulso);

  respuestaHTTP = await axios
    .post(
      "http://localhost:1338/pulso",
      {
        valor: pulso,
      }

    );

});

mySerial.on('err', function (err) {
  console.log(err.message);
});


module.exports.bootstrap = async function() {



};
