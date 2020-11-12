const express = require('express');
const router = express.Router();
const request = require('request');




router.post('/', async function(req, res, next) {
    try{
        let url = req.body.url;
        request(url, { json: true }, (err, r, body) => {
            if (err) { return console.log(err); }
            console.log(body);
            res.json(body);
        });


    }catch (e){
        res.status(502).json();
    }

});

module.exports = router;
