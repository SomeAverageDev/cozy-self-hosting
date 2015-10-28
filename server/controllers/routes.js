// See documentation on https://github.com/frankrousseau/americano#routes

'use strict';

var index = require('./index');
var debian = require('./debian');

module.exports = {
  '': {
    get: index.main
  },
  'debian/fqdn': {
    post: debian.fqdn
  }
};