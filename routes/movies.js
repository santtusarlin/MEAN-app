const express = require('express');
const router = express.Router();

const movieCon = require('../controllers/MovieController');
const userCon = require('../controllers/AuthController');

const authorize = require('../auth/VerifyToken');

// find all movies
router.get('/', movieCon.findMovies);

// find movies by name
router.get('/findByName/:name', movieCon.findMoviesByName);

// find movies by year
router.get('/findByYear/:year', movieCon.findMoviesByYear);

// find movies by genre
router.get('/findByGenre/:genre', movieCon.findMoviesByGenre);

// add new movie
router.post('/', authorize, movieCon.addMovie);

// delete movie
router.delete('/:_id', authorize, movieCon.deleteMovie);

// update movie
router.put('/:_id', authorize, movieCon.updateMovie);

// rekisteröityminen eli luodaan uudelle käyttäjälle tunnarit
router.post('/register', userCon.registerUser);

//login
router.post('/login', userCon.authenticateUser);

module.exports = router;