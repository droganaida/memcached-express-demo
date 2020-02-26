
const Promise = require('bluebird');
const Config = require('./libs/config');
const memcached = require('./libs/memcached/memcachedPromises');

module.exports.commonMW = async (req, res, next) => {

    if (Config.cachePages) {
        res.locals.templateKey = Config.memcached.templatePrefix + req.originalUrl || req.url;
        try {
            res.locals.cachedBody = await memcached.prGet(res.locals.templateKey);
            if (res.locals.cachedBody) {
                next();
            } else {
                await getCommonVars();
                next();
            }
        } catch (e) {
            console.error(e.stack);
            await getCommonVars();
            next();
        }
    } else {
        await getCommonVars();
        next();
    }

    async function getCommonVars() {
        //Sloooow operation
        await Promise.delay(500);

        res.locals.page = '';
        res.locals.title = 'Error page';
        res.locals.fullYear = (new Date()).getFullYear();
        res.locals.mainMenu = [
            {page: 'main', url: '/', text: 'Home'},
            {page: 'about', url: '/about', text: 'About'},
            {page: 'notfound', url: '/notfound', text: 'Not found'},
            {page: 'error', url: '/error', text: 'Error'}
        ];
    }
};