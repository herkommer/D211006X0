exports.data_raw = (req, res) => {

    const data = require('../public/data/cars.json');
    res.json(data);
 
};

exports.index = (req, res) => {

    res.sendfile('public/data/cars.html');

};

exports.car_by_id = (req, res) => {

    //How to get the value sent in and named id in the route
    //res.send(req.params.id);

    const cars = require('../public/data/cars.json');
    
    let car_data = cars.find( x => {
        return x.id == req.params.id;
    });

    res.send(car_data);
};