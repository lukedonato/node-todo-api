const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

let data = {
  id: 10
};

let token = jwt.sign(data, '123abc');

let decoded = jwt.verify(token, '123abc');

console.log(token);
console.log(decoded);
// let message = 'I am user number 3';
// let hash = SHA256(message).toString();
//
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);
