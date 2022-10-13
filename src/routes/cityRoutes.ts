import { Router } from 'express';
import { createCity, getAllCities } from '../controllers/cityController';

const router = Router();

router.post('/', createCity);
router.get('/:id', getAllCities);

export default router;