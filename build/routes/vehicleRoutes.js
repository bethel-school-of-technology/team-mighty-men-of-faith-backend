"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const vehicleController_1 = require("../controllers/vehicleController");
const router = (0, express_1.Router)();
router.post('/', vehicleController_1.addVehicle);
router.get('/', vehicleController_1.allVehicles);
router.get('/:vehicleID', vehicleController_1.getVehicle);
exports.default = router;
