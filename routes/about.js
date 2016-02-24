var express = require('express'),
    router = express.Router();

router.get('/', about);

// Route functions
function about (req,res) {
    console.log('Request about page.');
    res.render('about');
}

module.exports = router;