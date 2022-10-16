import { Router } from 'express';
import { allOrders, createOrder, getOneOrder, updateOrder } from '../controllers/orderController';

const router = Router();

// router.get('/', getAllOrders);

router.post('/', createOrder);
router.get('/', allOrders)
router.get('/:orderId', getOneOrder);
router.put('/:orderId', updateOrder);

// router.delete('/:orderId', deleteOrder);

export default router;