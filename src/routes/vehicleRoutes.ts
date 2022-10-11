import { Router } from 'express';
import { addVehicle } from '../controllers/vehicleController';

const router = Router();

router.post('/', addVehicle);

export default router;