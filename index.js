console.log('starting');
const midi = require('midi');

const input = new midi.input();

let count = input.getPortCount();
if (count > 0) {
  console.log('count: ' + count);

  let portName = input.getPortName(0);
  console.log('portName: ' + portName);

  input.on('message', function (deltaTime, message) {
    console.log('m: ' + message + ' - d: ' + deltaTime);
  });

  input.openPort(0);
  input.ignoreTypes(false, false, false);
}
