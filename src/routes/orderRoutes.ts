import { Router } from 'express';
import { createOrder } from '../controllers/orderController';

const router = Router();

// router.get('/', getAllOrders);

router.post('/', createOrder);

// router.get('/:orderId', getOrder);

// router.put('/:orderId', updateOrder);

// router.delete('/:orderId', deleteOrder);

export default router;