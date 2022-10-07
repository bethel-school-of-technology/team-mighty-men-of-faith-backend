import { Router } from 'express';
import { allVehicle, oneVehicle } from '../controllers/vehicleController';

const router = Router();

//GET /vehicles - re3nders a list of vehicles
router.get('/', allVehicle);

//GET /vehicle/:id - renders the vehicle requested
router.get('/:id', oneVehicle);

export default router;