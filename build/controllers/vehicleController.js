"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVehicle = exports.allVehicles = exports.addVehicle = void 0;
const vehicle_1 = require("../models/vehicle");
const addVehicle = async (req, res, next) => {
    let newVehicle = req.body;
    if (newVehicle.make) {
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
const allVehicles = async (req, res, next) => {
    let vehicle = await vehicle_1.Vehicle.findAll();
    res.status(201).json({
        vehicle
    });
};
exports.allVehicles = allVehicles;
const getVehicle = async (req, res, next) => {
    let vehicleID = req.params.vehicleID;
    let vehicleFound = await vehicle_1.Vehicle.findByPk(vehicleID);
    if (vehicleFound) {
        res.status(200).json(vehicleFound);
    }
    else {
        res.status(404).json();
    }
};
exports.getVehicle = getVehicle;
