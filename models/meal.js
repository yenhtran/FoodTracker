var mongoose = require('mongoose');

var mealSchema = new mongoose.Schema({
    name: String,
    image: String,
    calorie: Number
});

module.exports = mongoose.model('Meal', mealSchema);