const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const riders = require('../../Riders');
const drivers = require('../../Drivers');

//rider request
router.post('/rider', (req, res) => {
    
    riders.push(req.body);
  
    res.json(riders);
  });

  router.post('/driver', (req, res) => {
    
    drivers.push(req.body);
    
    res.json(drivers);
  });

  module.exports = router;