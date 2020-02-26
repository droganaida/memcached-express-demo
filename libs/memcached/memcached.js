
const Memcached = require('memcached');
const Config = require('../config');
const memcached = new Memcached(Config.memcached.uri, Config.memcached.options);

module.exports = memcached;