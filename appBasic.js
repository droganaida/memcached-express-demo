
const express = require('express');
const PORT = 6006;
const Memcached = require('memcached');
const memcached = new Memcached('127.0.0.1:11211',
    {timeout: 200, maxTimeout: 200, minTimeout: 20, failures: 1});

const appBasic = express();

// Caching middleware
const cache = (duration) => {
    return (req, res, next) => {
        const templateKey = '_template_' + req.originalUrl || req.url;
        memcached.get(templateKey, (err, cachedBody) => {
            if (cachedBody) {
                res.send(cachedBody);
            } else {
                if (err) console.error(err);
                res.sendResponse = res.send;
                res.send = (body) => {
                    memcached.set(templateKey, body, duration, (err) => {
                        if (err) console.error(err);
                        res.sendResponse(body);
                    });
                };
                next();
            }
        });
    }
};

// Routing
appBasic.get('/', cache(10), (req, res) => {
    setTimeout(() => {
        res.send('<h1>Hello</h1>');
    }, 2000) //Sloooow processing
});

appBasic.use((req, res) => {
    res.status(404);
    res.send('<h1>404</h1>');
});

appBasic.listen(PORT, () => {
    console.log(`Listening on port ${PORT}!`);
});