
const memcached = require('./memcached');
const Promise = require('bluebird');

exports.prGet = async (templateKey) => {

    return new Promise((resolve, reject) => {
        memcached.get(templateKey, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
};

exports.prSet = async (templateKey, data, cacheTime) => {

    return new Promise((resolve, reject) => {
        memcached.set(templateKey, data, cacheTime, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve('OK');
            }
        });
    });
};

exports.prDel = async (templateKey) => {

    return new Promise((resolve, reject) => {
        memcached.del(templateKey, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve('OK');
            }
        });
    });
};