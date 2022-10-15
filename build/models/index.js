"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const sequelize_1 = require("sequelize");
const order_1 = require("./order");
const user_1 = require("./user");
const vehicle_1 = require("./vehicle");
const dbName = 'testDB';
const username = 'ourdb';
const password = 'Fortynine9';
const sequelize = new sequelize_1.Sequelize(dbName, username, password, {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});
(0, user_1.UserFactory)(sequelize);

(0, order_1.OrderFactory)(sequelize);
(0, order_1.AssociateUserOrder)();
(0, vehicle_1.VehicleFactory)(sequelize);

exports.db = sequelize;
