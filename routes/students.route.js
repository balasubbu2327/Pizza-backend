const router = require('express').Router();
const service = require('../services/students.service');

router.get('/', service.getAllStudents);
router.get('/:id', service.getStudentsById);
router.post('/', service.createStudents);
router.put('/:id', service.updateStudents);
router.delete('/:id', service.deleteStudentsById);

module.exports = router;