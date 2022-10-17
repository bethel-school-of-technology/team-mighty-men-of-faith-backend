"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const orderController_1 = require("../controllers/orderController");
const router = (0, express_1.Router)();
// router.get('/', getAllOrders);
router.post('/', orderController_1.createOrder);
router.get('/:orderId', orderController_1.getOneOrder);
router.put('/:orderId', orderController_1.updateOrder);
// router.delete('/:orderId', deleteOrder);
exports.default = router;
