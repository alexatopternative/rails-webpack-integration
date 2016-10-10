var moment = require('moment');

export function helloWorld () {
  console.log('hello world', require('./logo.png'));
}

export function appTime () {
  if(opt_tz_offset) {
    return moment().utcOffset(opt_tz_offset/60);
  } else {
    return moment();
  }
}

export function browserTime () {
  return moment();
}

export function m () {
  return moment;
}

