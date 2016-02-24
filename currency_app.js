var express = require('express'),
    routes = require('./routes/index'),
    about = require('./routes/about'),
    path = require('path'),
    
    app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'static')))

app.listen(3010, function () {
    console.log("Currency app listening on port 3010.")
});

app.use('/', routes);
app.use('/about', about);

module.exports = app;