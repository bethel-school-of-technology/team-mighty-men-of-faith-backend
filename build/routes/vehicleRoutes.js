"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const vehicleController_1 = require("../controllers/vehicleController");
const router = (0, express_1.Router)();
router.post('/api/vehicle', vehicleController_1.addVehicle);
exports.default = router;
