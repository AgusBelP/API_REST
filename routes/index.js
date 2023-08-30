const express = require('express');
const router = express.Router();
const fs = require('fs');

const path_routes = __dirname;

const a = fs.readdirSync(path_routes);


module.exports = router;