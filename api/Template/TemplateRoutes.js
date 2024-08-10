var router = require('express').Router();

var controller = require('./TemplateController');
router.get('/test',controller.test);

router.post('/insert',controller.insert);

router.post('/getall',controller.getall);

router.post('/update',controller.update);

router.post('/delete',controller.delete);

module.exports = router;