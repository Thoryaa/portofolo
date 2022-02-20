const { response } = require('express');
var express = require('express');
const req = require('express/lib/request');
var router = express.Router();
const axios = require("axios").default;
const app = express();
app.set("view engine", "ejs");
app.use(express.static('./public'));
app.use(express.urlencoded);

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});
/* GET login page. */

router.get('/login', function(req, res, next) {
    res.render('login');
});
/* GET signup page. */

router.get('/signup', function(req, res, next) {
    res.render('signup');
});
/* GET signup page. */

router.get('/dashboard', function(req, res, next) {
    res.render('dashboard');
});

module.exports = router;