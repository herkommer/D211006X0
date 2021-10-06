'use strict';

const express = require('express');
const app = express();
const port = 8042;

app.use(express.static('public'));

app.get('/', (req, res) => {

    res.sendFile('public/index.html');

});

app.listen(port);

console.log('Server up and running, listning on port: ' + port);
