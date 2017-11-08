var express = require('express'),
    app = express();
    bodyPareser = require('body-parser');
    mongoose = require('mongoose');
    Meal = require('./models/meal');
    seedDB = require('./seeds');

seedDB();
mongoose.connect('mongodb://localhost/food_tracker');
app.use(bodyPareser.urlencoded({extended: true}));
app.set('view engine', 'ejs');


app.get('/', function(req, res){
    res.render('landing');
});

app.get('/meals', function (req,res) {

    Meal.find({}, function(err, allmeals) {
        if(err){
            console.log(err);
        } else {
            res.render('index', {meals: allmeals})
        }
    });

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
            res.redirect('/index');
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

