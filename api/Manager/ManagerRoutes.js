var router = require('express').Router();

var controller = require('./ManagerController');

router.post('/insert',controller.insert);

router.post('/getall',controller.getall);

router.post('/update',controller.update);

router.post('/delete',controller.delete);

router.post('/search',controller.search);

//router.post('/iscreated',controller.isCreated);



module.exports = router;