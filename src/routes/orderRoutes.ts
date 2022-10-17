import { Router } from 'express';
import { createOrder, getOneOrder, updateOrder } from '../controllers/orderController';

const router = Router();

// router.get('/', getAllOrders);

router.post('/', createOrder);
router.get('/:orderId', getOneOrder);
router.put('/:orderId', updateOrder);
// router.delete('/:orderId', deleteOrder);

export default router;