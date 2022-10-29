var express = require('express');
var router = express.Router();

/* GET index page. */
router.get('/projects', function(req, res, next) {
  res.render('projects');
});

module.exports = router;
