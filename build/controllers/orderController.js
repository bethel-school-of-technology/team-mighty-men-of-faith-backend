"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateOrder = exports.getOneOrder = exports.createOrder = void 0;
const order_1 = require("../models/order");
const auth_1 = require("../services/auth");
const createOrder = async (req, res, next) => {
    let user = await (0, auth_1.verifyUser)(req);
    if (!user) {
        return res.status(403).send();
    }
    let newOrder = req.body;
    newOrder.userId = user.userId;
    if (newOrder.locationId && newOrder.vehicleId) {
        let created = await order_1.Order.create(newOrder);
        res.status(201).json(created);
    }
    else {
        res.status(400).send();
    }
};
exports.createOrder = createOrder;
const getOneOrder = async (req, res, next) => {
    let user = await (0, auth_1.verifyUser)(req);
    if (!user) {
        return res.status(403).send();
    }
    let orderId = req.params.orderId;
    let order = await order_1.Order.findOne({ where: { orderId: orderId, userId: user.userId } });
    if (order) {
        res.status(200).json(order);
    }
    else {
        res.status(404).json({});
    }
};
exports.getOneOrder = getOneOrder;
const updateOrder = async (req, res, next) => {
    let user = await (0, auth_1.verifyUser)(req);
    if (!user) {
        return res.status(403).send();
    }
    let orderId = req.params.orderId;
    let newOrder = req.body;
    let foundOrder = await order_1.Order.findOne({ where: { orderId: orderId, userId: user.userId } });
    if (foundOrder && foundOrder.orderId == newOrder.orderId
        && newOrder.userId) {
        await order_1.Order.update(newOrder, {
            where: { orderId: orderId }
        });
        res.status(200).json();
    }
    else {
        res.status(400).json();
    }
};
exports.updateOrder = updateOrder;
