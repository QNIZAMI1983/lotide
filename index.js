// index.js
const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const eqObjects = require ('./eqObjects');
const without= require ('./without');
const countLetters = require ('./countLetters');
const countOnly = require ('./countOnly');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const flatten = require ('./flatten');
const letterPositions = require('./letterPositions');
const map = require('./map');

module.exports = {
  head: head,
  tail: tail,
  middle: middle,
  assertArraysEqual: assertArraysEqual,
  assertEqual: assertEqual,
  assertObjectsEqual: assertObjectsEqual,
  eqObjects:  eqObjects,
  without: without,
  countLetters: countLetters,
  countOnly: countOnly,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  flatten: flatten,
  letterPositions: letterPositions,
  map: map
};