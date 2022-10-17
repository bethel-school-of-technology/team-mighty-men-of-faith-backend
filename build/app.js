"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const models_1 = require("./models");
const adminjs_1 = __importDefault(require("adminjs"));
const express_2 = __importDefault(require("@adminjs/express"));
const sequelize_1 = __importDefault(require("@adminjs/sequelize"));
const orderRoutes_1 = __importDefault(require("./routes/orderRoutes"));
const vehicleRoutes_1 = __importDefault(require("./routes/vehicleRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
adminjs_1.default.registerAdapter(sequelize_1.default);
const app = (0, express_1.default)();
const admin = new adminjs_1.default({
    databases: [models_1.db],
    rootPath: '/admin', //path to adminjs dashboard
});
const adminRouter = express_2.default.buildRouter(admin);
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(admin.options.rootPath, adminRouter);
// routes
app.use('/api/orders', orderRoutes_1.default);
app.use('/api/vehicles', vehicleRoutes_1.default);
app.use('/api/users', userRoutes_1.default);
app.use((req, res, next) => {
    res.status(404).end();
});
//Syncing our database
models_1.db.sync({ alter: true }).then(() => {
    console.info("connected to the database!");
});
app.listen(3000);
// import express, { NextFunction, Request, Response } from 'express'
// import morgan from 'morgan';
// import { db } from './models';
// import AdminJS from 'adminjs'
// import AdminJSExpress from '@adminjs/express'
// import AdminJSSequelize from '@adminjs/sequelize';
// import orderRoutes from './routes/orderRoutes';
// import vehicleRoutes from './routes/vehicleRoutes';
// import userRoutes from './routes/userRoutes';
// AdminJS.registerAdapter(AdminJSSequelize)
// const app = express();
// const admin = new AdminJS({
//     databases: [db], // connect resource here
//     rootPath: '/admin', //path to adminjs dashboard
// });
// const adminRouter = AdminJSExpress.buildRouter(admin);
// app.use(morgan('dev'));
// app.use(express.json());
// app.use(express.urlencoded({extended: true}));
// app.use(admin.options.rootPath, adminRouter);
// // routes
// app.use('/api/orders', orderRoutes);
// app.use('/api/vehicles', vehicleRoutes);
// app.use('/api/users', userRoutes);
// app.use((req: Request, res: Response, next: NextFunction) => {
//     res.status(404).end();
// });
// //Syncing our database
// db.sync({ alter: true }).then(() => {
//     console.info("connected to the database!")
// });
// app.listen(3000);
