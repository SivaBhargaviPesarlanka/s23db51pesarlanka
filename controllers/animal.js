var animal = require('../models/animal');
// List of all Costumes
exports.animal_list = function(req, res) {
res.send('NOT IMPLEMENTED: Costume list');
};
// for a specific Costume.
exports.animal_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Costume detail: ' + req.params.id);
};
// Handle Costume create on POST.
/*exports.animal_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Costume create POST');
};*/

// Handle Costume create on POST.
exports.animal_create_post = async function(req, res) {
    console.log(req.body)
    let document = new animal();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.animal_Name = req.body.animal_Name;
    document.animal_breed = req.body.animal_breed;
    document.animal_cost = req.body.animal_cost;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    

// Handle Costume delete form on DELETE.
exports.animal_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Costume delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.animal_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Costume update PUT' + req.params.id);
};

// List of all Animals
exports.animal_list = async function(req, res) {
    try{
    theAnimals = await animal.find();
    res.send(theAnimals);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    // VIEWS
    // Handle a show all view
    exports.animal_view_all_Page = async function(req, res) {
    try{
    theAnimals = await animal.find();
    res.render('animal', { title: 'Animal Search Results', results: theAnimals });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    
    
