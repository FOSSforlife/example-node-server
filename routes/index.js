var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/files', function(req, res, next) {
  const addition = 4 + 3;
  
  res.send({
    result: addition
  });
})

module.exports = router;
