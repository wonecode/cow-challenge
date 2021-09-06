const myInformation = require('./information');
const cowsay = require('cowsay');

console.log(
  cowsay.say({
    text: `I'm ${myInformation.name} and i come from ${myInformation.campus} !`,
    e: 'oO',
    T: 'U ',
  })
);