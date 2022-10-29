var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/about-me', function(req, res, next) {
  res.render('about');
});

module.exports = router;
