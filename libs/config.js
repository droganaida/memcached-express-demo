
let config = {};

config.port = 6008;

config.cachePages = true;
config.memcached = {
    "uri": "127.0.0.1:11211",
    "options": {
        timeout: 200,
        maxTimeout: 200,
        minTimeout: 20,
        failures: 1
    },
    "templatePrefix": "_template_"
};

module.exports = config;