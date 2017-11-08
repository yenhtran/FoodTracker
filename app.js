var express = require('express'),
    app = express();

app.get('/', function(req, res){
    res.send('landing page');
});

app.listen(8080, function() {
    console.log('UACF app has started...');
});