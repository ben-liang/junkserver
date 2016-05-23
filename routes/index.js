var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Routes for geo-located sites */
router.get('/en-eu', function(req, res, next) {
  res.render('geo-specific-index', { title: 'EU Site' });
});

router.get('/en-us', function(req, res, next) {
  res.render('geo-specific-index', { title: 'US Site' });
});

router.get('/en-au', function(req, res, next) {
  res.render('geo-specific-index', { title: 'AU Site' });
});

module.exports = router;
