var moment = require('moment');
var _ = require('lodash/fp');

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

export function injected() {
  return window.gon;
}

export function retrieveContextFromAttrs(mountNode) {
  let parent =  $(mountNode).parent('.opt-context')
    if(parent.length) {
      attrbutes = attributes[0].attributes;
    }
  return _.reduce(function(hash, attr) {
    hash[attr.name] = attr.value;
    return hash;
  }, {}, attributes);
}

export function retrieveContextFromJSON(mountNode) {
 return JSON.parse(
   $(mountNode).parent('.opt-context').attr('dataset')
 );
}
