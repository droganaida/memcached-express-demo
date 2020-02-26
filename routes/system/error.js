
exports.get = (req, res, next) => {

    res.locals.page = 'error';

    try {
        const cat = {};
        const catNameLength = cat.name.length;
        res.send(`<h1>${catNameLength}</h1>`);
    } catch (e) {
        next(e);
    }
};