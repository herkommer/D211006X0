var express = require('express');
var router = express.Router();

// Require controller module
var cars_controller = require('../controllers/carsController');

// Cars ROUTES //

//GET
router.get('/', cars_controller.index);
router.get('/data', cars_controller.data_raw);
router.get('/:id', cars_controller.car_by_id);

module.exports = router;