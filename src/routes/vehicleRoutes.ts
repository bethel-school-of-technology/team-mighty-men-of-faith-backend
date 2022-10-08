import { Router } from 'express';
import { addVehicle } from '../controllers/vehicleController';

const router = Router();

router.post('/api/vehicle', addVehicle);

export default router;