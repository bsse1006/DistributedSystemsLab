const express = require('express');
const router = express.Router();
const matches = require('../../Matches');

router.post('/sendMatch', (req, res) => {
    
  matches.push(req.body);
  console.log(req.body);
  res.json(matches);
});

module.exports = router;