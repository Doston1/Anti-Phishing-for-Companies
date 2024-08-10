var router = require('express').Router();

var controller = require('./ExperimentController');
router.get('/test',controller.test);

router.post('/urlfind',controller.urlfind);

router.post('/insert',controller.insert);

router.post('/updateusers', controller.updateUsers);

router.post('/sendit', controller.sendIt);

router.post('/getall',controller.getall);

router.post('/managergetall',controller.managergetall);

router.post('/update',controller.update);

router.post('/printusers',controller.printusers);

router.post('/delete',controller.delete);

router.post('/statistics',controller.statistics);

router.post('/getname',controller.getname);

module.exports = router;