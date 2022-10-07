import { RequestHandler } from "express";

const vehicleList = [
    {
        id: "1",
        make:"Ford",
        model: "Tauris"
    },
    {   
        id: "2",
        make:"Tesla",
        model: "Model C"
    },
    {
        id: "3",
        make:"Toyota",
        model: "Camary"
    },
    {
        id: "4",
        make:"Chevy",
        model: "Truck"
    },
    {
        id: "5",
        make:"Ford",
        model: "Falcon"
    }
]

export const defaultVehicle: RequestHandler = (req, res, next) => {
    res.redirect('/vehicle');
}

export const allVehicle: RequestHandler = (req, res, next) => {
    res.render('all-vehicle', {
        vehicleList
    });
}

export const oneVehicle: RequestHandler = (req, res, next) => {
    //get the vehicle id
    let vehicleID = req.params.id;

    //Find the vehicle
    let foundVehicle = vehicleList.find(vehicle => {
        return vehicle.id === vehicleID;
    })
    // if the vehicle was not foudn, return not found
    if (!foundVehicle)  {
        return res.render('error', {
            message: "This is the the URL you are looking for!"
        })
    }
    // Render the view? with the found vehicle 
    res.render('vehicle-detail', {
        foundVehicle
    })
}