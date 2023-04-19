var animal = require('../models/animal');
// List of all animals
exports.animal_list = function(req, res) {
res.send('NOT IMPLEMENTED: animal list');
};
// for a specific animal.
exports.animal_detail = function(req, res) {
res.send('NOT IMPLEMENTED: animal detail: ' + req.params.id);
};
// Handle animal create on POST.
/*exports.animal_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: animal create POST');
};
*/

// Handle animal create on POST.
exports.animal_create_post = async function(req, res) {
    console.log(req.body)
    let document = new animal();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"animal_type":"goat", "cost":12, "size":"large"}
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

    

// Handle animal delete form on DELETE.
exports.animal_delete = function(req, res) {
res.send('NOT IMPLEMENTED: animal delete DELETE ' + req.params.id);
};
// Handle animal update form on PUT.
exports.animal_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: animal update PUT' + req.params.id);
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

    // for a specific animal.
exports.animal_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await animal.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };

    // Handle animal update form on PUT.
exports.animal_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await animal.findById( req.params.id)
// Do updates of properties
if(req.body.animal_Name)
toUpdate.animal_Name = req.body.animal_Name;
if(req.body.animal_breed) toUpdate.animal_breed = req.body.animal_breed;
if(req.body.animal_cost) toUpdate.animal_cost = req.body.animal_cost;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};

// Handle Animal delete on DELETE.
exports.animal_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await animal.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };

    // Handle a show one view with id specified by query
exports.animal_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await animal.findById( req.query.id)
    res.render('animaldetail',
    { title: 'Animal Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

    // Handle building the view for creating a animal.
// No body, no in path parameter, no query.
// Does not need to be async
exports.animal_create_Page = function(req, res) {
console.log("create view")
try{
res.render('animalcreate', { title: 'Animal Create'});
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};

// Handle building the view for updating a animal.
// query provides the id
exports.animal_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await animal.findById(req.query.id)
    res.render('animalupdate', { title: 'Animal Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };


// Handle a delete one view with id from query
exports.animal_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await animal.findById(req.query.id)
    res.render('animaldelete', { title: 'Animal Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

    


    

    
    
