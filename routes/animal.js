var express = require('express');
const animal_controlers= require('../controllers/animal');
var router = express.Router();
/* GET Animals */
router.get('/', animal_controlers.animal_view_all_Page);
module.exports = router;

/*var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('animal', { title: 'Search Results Animals' });
});
module.exports = router;*/


