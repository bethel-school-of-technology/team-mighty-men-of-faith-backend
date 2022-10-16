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

export const getOneOrder: RequestHandler = async (req, res, next) => {
    let user: User | null = await verifyUser(req);

    if (!user) {
        return res.status(403).send();
    }

    let orderId = req.params.orderId;
    let order = await Order.findOne( { where: {orderId: orderId, userId: user.userId} });
    if (order) {
        res.status(200).json(order);
    }
    else {
        res.status(404).json({});
    }
}

export const updateOrder: RequestHandler = async (req, res, next) => {
    let user: User | null = await verifyUser(req);

    if (!user) {
        return res.status(403).send();
    }

    let orderId = req.params.orderId;
    let newOrder: Order = req.body;
    
    let foundOrder = await Order.findOne( { where: {orderId: orderId, userId: user.userId} });
    
    if (foundOrder && foundOrder.orderId == newOrder.orderId
        && newOrder.userId) {
            await Order.update(newOrder, {
                where: { orderId: orderId }
            });
            res.status(200).json();
    }
    else {
        res.status(400).json();
    }
}

export const allOrders: RequestHandler = async (req, res, next) => {
    let order = await Order.findAll();
            res.status(201).json({
                order
        });
}

export const deleteOrder: RequestHandler = async (req, res, next) => {
    let orderId = req.params.orderId;
    let orderFound = await Order.findByPk(orderId);

    if (orderFound) {
        await Order.destroy({
            where: { orderId: orderId }
        });
        res.status(200).json();
    }
    else {
        res.status(404).json;
    }
}