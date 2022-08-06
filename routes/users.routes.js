const router = require('express').Router();

const service = require('../services/user.service');

router.get('/', service.getAllUsers);
router.get('/:id', service.getUsersById);
router.put('/:id', service.updateUsers);
router.delete('/:id', service.deleteUsersById);

module.exports = router;