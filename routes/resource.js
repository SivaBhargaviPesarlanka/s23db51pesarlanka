var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var animal_controller = require('../controllers/animal');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/animal', animal_controller.animal_create_post);
// DELETE request to delete Costume.
router.delete('/animal/:id', animal_controller.animal_delete);
// PUT request to update Costume.
router.put('/animal/:id', animal_controller.animal_update_put);
// GET request for one Costume.
router.get('/animal/:id', animal_controller.animal_detail);
// GET request for list of all Costume items.
router.get('/animal', animal_controller.animal_list);
module.exports = router;
// API for our resources
exports.api = function(req, res) {
res.write('[');
res.write('{"resource":"animal", ');
res.write(' "verbs":["GET","PUT", "DELETE"] ');
res.write('}');
res.write(']')
res.send();
};
