const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/moviedb');

const movieSchema = new Schema({
    name: { type: String, required: true },
    year: { type: String, required: true },
    genre: { type: Array, required: true },
    length: { type: String, required: true },
    rating: { type: Number, required: true },
    imgurl: { type: String },
    review: { type: String, required: true }
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;