import { RequestHandler } from "express";
import { Order } from "../models/order";
import { User } from "../models/user";
import { verifyUser } from "../services/auth";


export const createOrder: RequestHandler = async (req, res, next) => {
    let user: User | null = await verifyUser(req);

    if (!user) {
        return res.status(403).send();
    }

    let newOrder: Order = req.body;
    newOrder.userId = user.userId;
    
    if (newOrder.locationId && newOrder.vehicleId) {
        let created = await Order.create(newOrder);
        res.status(201).json(created);
    }
    else {
        res.status(400).send();
    }
}