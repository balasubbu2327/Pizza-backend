const router = require('express').Router();
const service = require('../services/orders.service');

router.get('/', service.getAllOrders);
router.get('/:id', service.getOrdersById);
router.get('/userId/:userId', service.getAllOrdersUserById);
router.post('/', service.createOrders);
router.put('/:id', service.updateOrders);
router.delete('/:id', service.deleteOrdersById);

module.exports = router;