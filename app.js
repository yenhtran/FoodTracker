var express = require('express'),
    app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('landing');
});

app.get('/meals', function (req,res) {
    var foods = [
        {name: 'banana', image: 'https://unsplash.com/photos/sf_1ZDA1YFw', calorie: 105},
        {name: 'cake', image: 'https://unsplash.com/photos/On2VseHUDXw', calorie: 500},
        {name: 'salad', image: 'https://unsplash.com/photos/KRGFXJWIo2Y', calorie: 150},
        {name: 'smoothie', image: 'https://unsplash.com/photos/m741tj4Cz7M', calorie: 200}
    ];
    res.render('meals', {meals: meals})
});

app.post('/meals', function(req, res){
    res.send('You hit POST ROUTE');
})

app.listen(8080, function() {
    console.log('UACF app has started...');
});