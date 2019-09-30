var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var User = require('../models/User');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../auth/config');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

const AuthController = {

    registerUser: function(req, res, next) {

        const hashedPassword = bcrypt.hashSync(req.body.password, 8);

        User.create({
            username: req.body.username,
            password: hashedPassword,
            isadmin: req.body.isadmin
        },
        (err, user) => {
            if (err) {
                return res.status(500).send('Käyttäjän rekisteröinti epäonnistui.')
            }
            const payload = {
                'username': user.username,
                'isadmin': user.isadmin
            };
            console.log(payload);
            const token = jwt.sign(payload, config.secret, {
                expiresIn: 86400 // Expires in 24h
            });
            res.json({
                success: true,
                message: 'Tässä valmis Token!',
                token: token
            });
        });
    },

    authenticateUser: function (req, res, next) {
        User.findOne({
            username: req.body.username
        }, function (err, user) {
            if (err) {
                throw err;
            }
            if (!user) {
                res.send('Käyttäjää ei ole');
            } else {
                const payload = {
                    'username': user.username,
                    'isadmin': user.isadmin
                };
                const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
                if (!passwordIsValid) { 
                    return res.status(401).send({ auth: false, token: null });
                }
                console.log(payload);
                const token = jwt.sign(payload, config.secret, {
                    expiresIn: 86400 // Expires in 24h
                });
                res.json({
                    success: true,
                    message: 'Tässä valmis Token!',
                    token: token
                });
            }
        });
    }
}

module.exports = AuthController;