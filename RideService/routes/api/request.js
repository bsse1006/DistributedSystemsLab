const express = require('express');
const router = express.Router();
const riders = require('../../Riders');
const drivers = require('../../Drivers');

//rider request
router.post('/rider', (req, res) => {
    
  riders.push(req.body);
  
  res.json(riders);
});

//driver request
router.post('/driver', (req, res) => {
    
  //console.log("aaaaaaaaaaaaaaaaaaa");
  drivers.push(req.body);
    
  res.json(drivers);
});

module.exports = router;