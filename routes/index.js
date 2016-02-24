var express = require('express'),
    router = express.Router();

// Routes!
router.get('/', homepage); // homepage
router.get('/convert', convert); // form submit

// Route functions
function homepage (req,res) {
    res.render('index');
}

function convert (req,res) {
    var converted,
        dollars = req.query.dollaramount, // $
        convertFrom = req.query.fromcurrency,
        convertTo = req.query.tocurrency,
        rates = { // conversion rates
            "Dollar": {
                "Pound": 1.6,
                "Euro": 1.1
            },
            "Pound": {
                "Dollar": 0.6,
                "Euro": 0.5
            },
            "Euro": {
                "Dollar": 0.9,
                "Pound": 1.7
            }
        };
    
    if (convertFrom != convertTo) {
        converted = dollars * rates[convertFrom][convertTo];
    } else {
        converted = dollars;
    }
    
    res.render('result', {
        dollars: dollars,
        currency: convertTo,
        converted: converted,
        converting: convertFrom
    });
}

module.exports = router;