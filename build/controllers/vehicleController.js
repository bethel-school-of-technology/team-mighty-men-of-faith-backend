"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addVehicle = void 0;
const vehicle_1 = require("../models/vehicle");
const addVehicle = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let newVehicle = req.body;
    if (newVehicle.vehicleID && newVehicle.vehicleID) {
        let created = yield vehicle_1.Vehicle.create(newVehicle);
        res.status(201).json(created);
    }
    else {
        res.status(400).send();
    }
});
exports.addVehicle = addVehicle;
