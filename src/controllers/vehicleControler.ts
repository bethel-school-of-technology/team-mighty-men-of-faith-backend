import { RequestHandler } from "express";

export const defaultVehicle: RequestHandler = (req, res, next) => {
    res.redirect('/vehicle');
}