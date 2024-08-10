var router = require('express').Router();

router.use('/manager', require('./Manager/ManagerRoutes'));
router.use('/template', require('./Template/TemplateRoutes'));
router.use('/user', require('./User/UserRoutes'));
router.use('/experiment', require('./Experiment/ExperimentRoutes'));
router.use('/admin', require('./Admin/AdminRoutes'));

module.exports = router;
