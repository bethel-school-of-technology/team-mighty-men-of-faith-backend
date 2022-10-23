import { Router } from 'express';
import { allOrders, createOrder, deleteOrder, getOneOrder, updateOrder } from '../controllers/orderController';

const router = Router();

router.post('/', createOrder);
router.get('/', allOrders)
router.get('/:orderId', getOneOrder);
router.put('/:orderId', updateOrder);
router.delete('/:orderId', deleteOrder);

export default router;