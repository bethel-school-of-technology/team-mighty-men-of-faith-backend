"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addVehicle = void 0;
const vehicle_1 = require("../models/vehicle");
const addVehicle = async (req, res, next) => {
    let newVehicle = req.body;
    if (newVehicle.vehicleID && newVehicle.vehicleID) {
        let created = await vehicle_1.Vehicle.create(newVehicle);
        res.status(201).json(created);
    }
    else {
        res.status(400).send();
    }
};
exports.addVehicle = addVehicle;
