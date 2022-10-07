import { Router } from 'express';

const router = Router();

//GET /vehicles - re3nders a list of vehicles
router.get('/', allVehicles);

//GET /vehicle/:id - renders the vehicle requested
router.get('/:id');

export default router;