const mongoose = require("mongoose")
const animal = mongoose.Schema({
animal_Name: String,
animal_breed: String,
animal_cost: Number
})
module.exports = mongoose.model("Animal",
animal)
