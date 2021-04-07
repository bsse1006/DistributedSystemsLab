const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const ratings = require('../../Ratings');

//rider request
router.post('/rating', (req, res) => {
    
    ratings.push(req.body);
  
    //res.json(riders);
});

module.exports = router;