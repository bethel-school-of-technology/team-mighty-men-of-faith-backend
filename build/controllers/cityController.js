"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCity = exports.getAllCities = void 0;
const city_1 = require("../models/city");
const getAllCities = async (req, res, next) => {
    let cities = await city_1.City.findAll();
    res.status(200).json(cities);
};
exports.getAllCities = getAllCities;
const createCity = async (req, res, next) => {
    let newCity = req.body;
    if (newCity.city && newCity.state) {
        let created = await city_1.City.create(newCity);
        res.status(201).json(created);
    }
    else {
        res.status(400).send();
    }
};
exports.createCity = createCity;
