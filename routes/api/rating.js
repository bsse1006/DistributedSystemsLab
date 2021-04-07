const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const Rating = require('../../models/Rating')

//rider request
router.post('/rating', (req, res) => {
    
    const rating = new Rating({
        rating: req.body.rating
    });

    rating.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        });
  
    //res.json(riders);
});

module.exports = router;