const mongoose = require("mongoose")
const animal = mongoose.Schema({
animal_Name:{ type: String, minlength:1, maxlength:20},
animal_breed:{type: String, minlength:1, maxlength:20},
animal_cost: {type: Number, min:100, maxlength:1000}
})
module.exports = mongoose.model("Animal",
animal)
