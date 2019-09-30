// kontrolleri joka sisältää tietokantaoperaatioiden metodit joita käytetään routerissa

const Movie = require('../models/Movie');

const MovieController = {

    findMovies: function (req, res) {
        Movie.find(function (err, movies) {
            if (err) {
                res.json(err);
            }
            res.json(movies);
        });
    },

    findMoviesByName: function(req, res) {
        Movie.find({ name: req.params.year }, function(err, movies) {
            if (err) {
                res.json(err);
            }
            res.json(movies);
        });
    },

    findMoviesByYear: function (req, res) {
        Movie.find({ year: req.params.year }, function(err, movies) {
            if (err) {
                res.json(err);
            }
            res.json(movies);
        });
    },

    findMoviesByGenre: function (req, res) {
        Movie.find({ genre: req.params.genre }, function(err, movies) {
            if (err) {
                res.json(err);
            }
            res.json(movies);
        })
    },

    addMovie: function (req, res) {
        const movie = new Movie({
            name: req.body.name,
            year: req.body.year,
            genre: req.body.genre,
            length: req.body.length,
            rating: req.body.rating,
            imgurl: req.body.imgurl,
            review: req.body.review
        });

        movie.save(function (err) {
            if (err) {
                res.json(err);
            }
            res.json(movie);
        });
    },

    updateMovie: function (req, res) {
        Movie.findByIdAndUpdate(req.params._id, req.body, {
            new: true
        }, function (err, movie) {
            if (err) {
                res.send(err);
            }

            movie.save(function (err) {
                if (err) {
                    res.send(err);
                }
                res.send({
                    message: 'Movie updated!'
                });
            });
        });
    },

    deleteMovie: function (req, res) {
        Movie.findByIdAndRemove(req.params._id, function (err) {
            if (err) {
                res.json(err);
            }
            res.json({
                message: 'Movie deleted'
            });
        });
    }

};

module.exports = MovieController;