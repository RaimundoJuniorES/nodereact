const express = require('express');
const router = express.Router();
const TaskController = require('../controller/TaskController');
const TaskValidation = require('../middlewares/TaskValidation');
const MacaddressValidation = require('../middlewares/MacaddressValidation');

router.post('/', TaskValidation , TaskController.create);
router.put('/:id', TaskValidation, TaskController.update);
router.get('/:id', TaskController.show);
router.delete('/:id', TaskController.delete);

router.get('/filter/all/:macaddress', MacaddressValidation, TaskController.all);
router.get('/filter/today/:macaddress', MacaddressValidation, TaskController.today);
router.get('/filter/week/:macaddress', MacaddressValidation, TaskController.week);
router.get('/filter/month/:macaddress', MacaddressValidation, TaskController.month);
router.get('/filter/year/:macaddress', MacaddressValidation, TaskController.year);

router.put('/:id/:done', TaskController.done);
router.get('/filter/late/:macaddress', MacaddressValidation, TaskController.late);


module.exports = router