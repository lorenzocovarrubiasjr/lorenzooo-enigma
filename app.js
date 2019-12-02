'use strict';
const Enigma = require('./enigma');
const eng = new Enigma('magrathea');

let encodeString = eng.encode("Don't panic")
console.log("Encoded: ", encodeString)

let decodeString = eng.decode(encodeString)
console.log("Decoded: ", decodeString);