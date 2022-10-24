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
//import { User } from './models/user';
const app = (0, express_1.default)();
app.use((0, morgan_1.default)('dev'));
adminjs_1.default.registerAdapter({
    Resource: sequelize_1.default.Resource,
    Database: sequelize_1.default.Database,
});
const admin = new adminjs_1.default({
    databases: [models_1.db],
    rootPath: '/admin', //path to adminjs dashboard
    //resources: [User],
});
// adminJS router
const adminRouter = express_2.default.buildRouter(admin);
app.use(admin.options.rootPath, adminRouter);
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
const cors = require('cors');
const corsOptions = {
    origin: ['http://localhost:3000', 'http://localhost:3001', 'https://carmigo.org/']
};
app.use(cors(corsOptions));
// routes
app.use('/api/orders', orderRoutes_1.default);
app.use('/api/vehicles', vehicleRoutes_1.default);
app.use('/api/users', userRoutes_1.default);
app.use((req, res, next) => {
    res.status(404).end();
});
//Syncing our database
models_1.db.sync({ alter: false }).then(() => {
    console.info("connected to the database!");
});
app.listen(3000);
