import { Sequelize } from "sequelize";
import { AssociateUserOrder, OrderFactory } from "./order";
import { UserFactory } from "./user";
import { VehicleFactory } from "./vehicle";

const dbName = 'testDB';
const username = 'ourdb';
const password = 'Fortynine9';

const sequelize = new Sequelize(dbName, username, password, {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});

UserFactory(sequelize);
OrderFactory(sequelize);
VehicleFactory(sequelize);
AssociateUserOrder();


export const db = sequelize;