var mongoose = require('mongoose');

var mealSchema = new mongoose.Schema({
    name: String,
    image: String,
    calorie: Number,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Meal', mealSchema);