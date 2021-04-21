const express = require('express');
const router = express.Router();
const Rating = require('../../models/Rating')

//rider request
router.post('/rating', (req, res) => {
    
    const rating = new Rating({
        rating: req.body.rating
    });

    console.log("Rating received from client and recorded");

    /*rating.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        });*/
  
    //res.json(riders);
});

module.exports = router;