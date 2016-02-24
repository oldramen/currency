var express = require('express'),
    router = express.Router();

// Get the apps home page
router.get('/', homepage);

// Route functions
function homepage (req,res) {
    res.send('Currency Site');
}

module.exports = router;