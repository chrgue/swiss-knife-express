const express = require('express');
const service = require('../service/blocking');
const router = express.Router();

router.get('/', async function(req, res) {

    const result = (req.query.threads === 'true') ?
        await service.doBlockingWorkWithWorkers(): await service.doBlockingWork()

    res.send(result)

});

module.exports = router;
