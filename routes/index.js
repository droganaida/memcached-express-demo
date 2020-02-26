
const cache = require('../libs/memcached/memcachedMW');

module.exports = (app) => {

    const mainRoute = require('./client/main');
    app.get('/', cache(10), mainRoute.get);
    app.post('/', mainRoute.post);

    const aboutRoute = require('./client/about');
    app.get('/about', cache(60*60*24*7), aboutRoute.get);

    const errRoute = require('./system/error.js');
    app.get('/error', errRoute.get);

    const nfRoute = require('./system/notfound.js');
    app.get('/notfound', nfRoute.get);
};