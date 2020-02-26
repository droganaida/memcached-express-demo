
const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const path = require('path');

const common = require('./common');
const Config = require('./libs/config');

const app = express();
app.use(helmet());
app.use(compression());

app.set('views', __dirname + '/templates');
app.set('view engine', 'ejs');
app.set('view options', {compileDebug: false, self: true, cache: true});
app.use(express.static(path.join(__dirname, 'public')));

// Common middleware
app.use(common.commonMW);

// Routing
require('./routes')(app);

// Error handling
app.use((err, req, res, next) => {
    console.error('Error:', err.stack);
    res.status(502);
    res.render('./error', {errorMsg: 'Server Error'});
});
app.use((req, res) => {
    res.status(404);
    res.render('./error', {errorMsg: 'Not Found'});
});

app.listen(Config.port, () => {
    console.log(`Listening on port ${Config.port}!`);
});