const generateRandomString = require('../utils/generateRandomString');
const router = require('express').Router();
let Link = require('../models/links.model');

router.route('/:shortlink').get((req, res) => {
    const shortLink = req.params.shortlink;
    const query = { shortLink: shortLink };
    
    // add verification if no link was found
    Link.findOne(query)
        .then(link => {
            res.redirect(link.fullLink);
        })
        .catch(err => res.json(err));
});

router.route('/add').post(async (req, res) =>{
    const fullLink = req.body.fullLink;

    var newShortLink = generateRandomString();

    // TODO: check to see if generated already exists
    var shortURLExists = true;
    while(shortURLExists){
        await Link.findOne({shortLink: newShortLink}, function(err, sL){
            if(err){
                res.json("There was an error");
            }
            if(!sL){
                shortURLExists = false;
            }
        })
        newShortLink = generateRandomString();
    }
        
    const newLink = new Link ({
        shortLink: newShortLink,
        fullLink: fullLink
    });

    newLink.save()
        .then(()=>{
            res.json(`http://localhost:5000/${newShortLink}`);
        })
        .catch(err => res.json("Error: " + err));
})

module.exports = router;