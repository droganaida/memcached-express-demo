
const Promise = require('bluebird');

exports.get = async (req, res, next) => {

    res.locals.page = 'about';
    res.locals.title = 'About page';

    //Sloooow operation
    await Promise.delay(2000);

    res.locals.buttons = [
        {img: '/images/mad-1.jpg', alt: 'super cat'},
        {img: '/images/mad-2.jpg', alt: 'cute cat'}
    ];
    res.render('./about');
};