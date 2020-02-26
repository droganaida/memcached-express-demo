
exports.get = (req, res, next) => {

    res.locals.page = 'notfound';

    try {
        // Where is the cat? o_O
        const catName = cat.name;
        res.send(`<h1>${catName}</h1>`);
    } catch (e) {
        next();
    }
};