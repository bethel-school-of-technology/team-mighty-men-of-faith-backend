import exp from "constants";
import { Sequelize } from "sequelize";
import { VehicleFactory } from "./vehicle";

const dbName = 'vehicledb';
const username = 'root';
const password = 'Password1!';

const sequelize = new Sequelize(dbName, username, password, {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});

VehicleFactory(sequelize);

export const db = sequelize;
