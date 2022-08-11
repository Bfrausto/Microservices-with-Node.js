const express = require('express');
const bodyParser = require('body-parser');

const config = require('../config');
const router = require('./network');

const app = express();

app.use(bodyParser.json());

app.use('/', router);

app.listen(config.cacheService.port, () => {
    console.log('Cache redis service running on port ', config.cacheService.port);
});