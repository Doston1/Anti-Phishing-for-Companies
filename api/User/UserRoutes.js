var router = require('express').Router();

var controller = require('./UserController');
router.get('/test',controller.test);

/*router.post('/getmail',controller.getmail);*/

router.post('/insert',controller.insert);

//router.post('/insertmany', controller.insertMany)

router.post('/getall',controller.getall);

router.post('/update',controller.update);

router.post('/delete',controller.delete);

module.exports = router;