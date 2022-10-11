"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addVehicle = void 0;
const vehicle_1 = require("../models/vehicle");
const addVehicle = async (req, res, next) => {
    let newVehicle = req.body;
    if (newVehicle.vehicleID && newVehicle.vehicleID) {
        let created = await vehicle_1.Vehicle.create(newVehicle);
        res.status(201).json({
            make: created.make,
            model: created.model,
            year: created.year,
            photoURL: created.photoURL,
            location: created.location,
            createdAT: created.createdAt,
            updatedAT: created.updatedAt
        });
    }
    else {
        res.status(400).send();
    }
};
exports.addVehicle = addVehicle;
