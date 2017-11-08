var express = require('express'),
    app = express();
    bodyPareser = require('body-parser');
    mongoose = require('mongoose');
    Meal = require('./models/meal');

mongoose.connect('mongodb://localhost/food_tracker');
app.use(bodyPareser.urlencoded({extended: true}));
app.set('view engine', 'ejs');


// Meal.create(
//     {
//         name: 'Waffles',
//         image: 'https://source.unsplash.com/6hxK5l-sHys/400X300',
//         calorie: 150
//
//     }, function(err, meal){
//         if (err) {
//             console.log(err);
//         } else {
//             console.log('NEWLY CREATED MEAL');
//             console.log(meal);
//         }
//     }
// );

// https://source.unsplash.com/xYkQQ2SfPog/400x300

// var meals = [
//     {name: 'banana', image: 'https://source.unsplash.com/sf_1ZDA1YFw/400x300', calorie: 105},
//     {name: 'cake', image: 'https://source.unsplash.com/On2VseHUDXw/400x300', calorie: 500},
//     {name: 'salad', image: 'https://source.unsplash.com/KRGFXJWIo2Y/400x300', calorie: 150},
//     {name: 'smoothie', image: 'https://source.unsplash.com/m741tj4Cz7M/400x300', calorie: 200},
//     {name: 'cookie', image: 'https://source.unsplash.com/OfdDiqx8Cz8/400x300', calorie: 250},
//     {name: 'dumplings', image: 'https://source.unsplash.com/67mdthfNa1Y/400x300', calorie: 175},
//     {name: 'soup', image: 'https://source.unsplash.com/w6ftFbPCs9I/400x300', calorie: 150},
//     {name: 'cookie', image: 'https://source.unsplash.com/OfdDiqx8Cz8/400x300', calorie: 250},
// ];

app.get('/', function(req, res){
    res.render('landing');
});

app.get('/meals', function (req,res) {

    //get all adventures from DB
    Meal.find({}, function(err, allmeals) {
        if(err){
            console.log(err);
        } else {
            res.render('index', {meals: allmeals})
        }
    });

    // res.render('meals', {meals: meals})
});

app.post('/meals', function(req, res){
    var name = req.body.name,
        image = req.body.image,
        calorie = req.body.calorie,
        newMeal = {name: name, image: image, calorie: calorie};

    Meal.create(newMeal, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            res.redirect('/meals');
        }
    });
});

app.get('/meals/new', function(req, res) {
    res.render('new.ejs');
});

app.get('/meals/:id', function(req, res) {
    Meal.findById(req.params.id, function(err, foundMeal){
        if(err){
            console.log(err);
        } else {
            res.render('show', {meal: foundMeal});
        }
    });
});

app.listen(8080, function() {
    console.log('UACF app has started...');
});

