"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const sequelize_1 = require("sequelize");
// import { AssociateUserReservation, ReservationFactory } from "./reservation";
const user_1 = require("./user");
const dbName = 'testDB';
const username = 'ourdb';
const password = 'Fortynine9';
const sequelize = new sequelize_1.Sequelize(dbName, username, password, {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});
(0, user_1.UserFactory)(sequelize);
// ReservationFactory(sequelize);
// AssociateUserReservation();
exports.db = sequelize;
