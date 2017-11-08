var express = require('express'),
    app = express();
    bodyPareser = require('body-parser');

app.use(bodyPareser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

var meals = [
    {name: 'banana', image: 'https://source.unsplash.com/sf_1ZDA1YFw/400x300', calorie: 105},
    {name: 'cake', image: 'https://source.unsplash.com/On2VseHUDXw/400x300', calorie: 500},
    {name: 'salad', image: 'https://source.unsplash.com/KRGFXJWIo2Y/400x300', calorie: 150},
    {name: 'smoothie', image: 'https://source.unsplash.com/m741tj4Cz7M/400x300', calorie: 200}
];

app.get('/', function(req, res){
    res.render('landing');
});

app.get('/meals', function (req,res) {
    res.render('meals', {meals: meals})
});

app.post('/meals', function(req, res){
    var name = req.body.name,
        image = req.body.image,
        calorie = req.body.calorie,
        newMeal = {name: name, image: image, calorie: calorie};

    meals.push(newMeal);
    res.redirect('/meals');
});

app.get('/meals/new', function(req, res) {
    res.render('new.ejs');
});

app.listen(8080, function() {
    console.log('UACF app has started...');
});

// https://source.unsplash.com/OfdDiqx8Cz8/400x300