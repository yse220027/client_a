const fs = require('fs');
const message = require('./message');
require('dotenv').config();

const result = message.create(process.env.NAME, process.env.NUMBER);

fs.writeFileSync('result.txt', result, 'utf-8');
