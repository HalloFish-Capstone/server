'use strict'
const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config();

const {
    PORT,
    HOST,
    HOST_URL
} = process.env;

assert(PORT, 'PORT is requiered!');
assert(HOST, 'HOST is requiered!');

module.exports = {
    port: PORT,
    host: HOST,
    url: HOST_URL
};