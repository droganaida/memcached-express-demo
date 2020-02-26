
const Promise = require('bluebird');

exports.get = async (req, res, next) => {

    res.locals.page = 'main';
    res.locals.title = 'Memcached demo by #Blondiecode';

    //Sloooow operation
    await Promise.delay(2000);
    res.render('./main');
};

exports.post = async (req, res) => {
    res.send('Hello!');
};