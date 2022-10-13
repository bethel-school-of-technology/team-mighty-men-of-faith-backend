import { RequestHandler } from "express";
import { City } from "../models/city";

export const getAllCities: RequestHandler = async (req, res, next) => {
    let cities = await City.findAll();
    res.status(200).json(cities);
}

export const createCity: RequestHandler = async (req, res, next) => {
    let newCity: City = req.body;
    if (newCity.city) {
        let created = await City.create(newCity);
        res.status(201).json(created);
    }
    else {
        res.status(400).send();
    }
}