"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrder = void 0;
const order_1 = require("../models/order");
const auth_1 = require("../services/auth");
// export const getAllBookmarks: RequestHandler = async (req, res, next) => {
//     let bookmarks = await Bookmark.findAll();
//     res.status(200).json(bookmarks);
// }
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
