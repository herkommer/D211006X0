exports.anka = (req, res) => {

    const data = require('../public/data/cars.json');
    //res.send('NOT IMPLEMENTED: Cars index!');
    res.json(data);
 
};

exports.pelikan = (x,y) => {
    // y.send('<b>u asked for car number 12.</b>');
    y.sendfile('public/data/cars.html');
};