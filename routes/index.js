const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('*', function (req, res, next) {
    res.json({
        "body": req.body,
        "url": req.originalUrl,
        "params": req.params,
        "query": req.query,
        "ip": req.connection.remoteAddress,
        "forwarded_for": req.headers['x-forwarded-for'],
        "runs_on_port":process.env.port,
    });
});

module.exports = router;
