const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ratingSchema = new Schema ({

    rating: String
});

const Rating = mongoose.model('Rating', ratingSchema);

module.exports = Rating;