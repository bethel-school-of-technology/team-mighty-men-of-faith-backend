import { RequestHandler } from "express";
import { Vehicle } from "../models/vehicle";

export const addVehicle: RequestHandler = async (req, res, next) => {
    let newVehicle: Vehicle = req.body;
    if (newVehicle.vehicleID && newVehicle.vehicleID) {
        let created = await Vehicle.create(newVehicle);
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
}

export const allVehicles: RequestHandler = async (req, res, next) => {
    let vehicleList: Vehicle[] = await Vehicle.findAll();
            res.status(201).json({
                vehicleList
        });
}

export const getVehicle: RequestHandler = async (req, res, next) => {
    let vehicleID = req.params.vehicleID;
    let vehicleFound = await Vehicle.findByPk(vehicleID);
    if (vehicleFound) {
        res.status(200).json(vehicleFound);
    }
    else {
        res.status(404).json();
    }
}