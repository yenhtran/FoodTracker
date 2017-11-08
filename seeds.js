var mongoose = require('mongoose'),
    Meal = require('./models/meal');

var meals = [
    {name: 'banana', image: 'https://source.unsplash.com/sf_1ZDA1YFw/400x300', calorie: 105},
    {name: 'cake', image: 'https://source.unsplash.com/On2VseHUDXw/400x300', calorie: 500},
    {name: 'salad', image: 'https://source.unsplash.com/KRGFXJWIo2Y/400x300', calorie: 150},
    {name: 'smoothie', image: 'https://source.unsplash.com/m741tj4Cz7M/400x300', calorie: 200},
    {name: 'cookie', image: 'https://source.unsplash.com/OfdDiqx8Cz8/400x300', calorie: 250},
    {name: 'dumplings', image: 'https://source.unsplash.com/67mdthfNa1Y/400x300', calorie: 175},
    {name: 'soup', image: 'https://source.unsplash.com/w6ftFbPCs9I/400x300', calorie: 150},
    {name: 'cookie', image: 'https://source.unsplash.com/OfdDiqx8Cz8/400x300', calorie: 250},
    {name: 'Waffles', image: 'https://source.unsplash.com/6hxK5l-sHys/400X300', calorie: 150}
];

function seedDB() {
    Meal.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log('removed meals!');

        meals.forEach(function(seed){
            Meal.create(seed, function(err, meal){
                if(err){
                    console.log(err);
                } else {
                    console.log('added a meal');
                }
            })
        })
    });
}

module.exports = seedDB;