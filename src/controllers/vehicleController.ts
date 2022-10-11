import { RequestHandler } from "express";
import { Vehicle } from "../models/vehicle";

export const addVehicle: RequestHandler = async (req, res, next) => {
    let newVehicle: Vehicle = req.body;
    if (newVehicle.vehicleID && newVehicle.vehicleID + newVehicle.make + newVehicle.model + newVehicle.year + newVehicle.photoURL + newVehicle.location + newVehicle.createdAt + newVehicle.updatedAt) {
        let created = await Vehicle.create(newVehicle);
        res.status(201).json(created);
    }
    else {
        res.status(400).send();
    }
}