var express = require('express'),
    routes = require('./routes/index'),
    path = require('path'),
    
    app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.listen(3010, function () {
    console.log("Currency app listening on port 3010.")
});

app.use('/', routes);

module.exports = app;