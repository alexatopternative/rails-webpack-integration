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

let dict;
export function i18n (key) {
  dict = dict || JSON.parse(document.querySelector('meta[name="i18n"]').getAttribute('content'));
  return key
    ? dict[key]
    : dict;
}
