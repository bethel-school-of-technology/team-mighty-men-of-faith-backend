import { Router } from 'express';
import { addVehicle, allVehicles, getVehicle } from '../controllers/vehicleController';

const router = Router();

router.post('/', addVehicle);
router.get('/', allVehicles);
router.get('/:vehicleID', getVehicle)

export default router;