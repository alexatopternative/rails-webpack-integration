var _ = require('lodash/fp');

export function helloWorld () {
  console.log('hello world', require('./logo.png'));
}

export function togetherness(x, y) {
  return _.union(x, y);
}
