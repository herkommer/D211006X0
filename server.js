'use strict';

const express = require('express');
const app = express();
const port = 8042;

app.use(express.static('public'));

app.get('/', (req, res) => {

    res.send('<b>I am alive!</b>');

});

app.listen(port);

console.log('Server up and running, listning on port: ' + port);
