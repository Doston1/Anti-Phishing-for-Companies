var router = require('express').Router();

var controller = require('./AdminController');

router.get('/test',controller.test);

router.post('/insert',controller.insert);

router.post('/getall',controller.getall);

router.post('/update',controller.update);

router.post('/delete',controller.delete);

router.post('/search',controller.search);

module.exports = router;