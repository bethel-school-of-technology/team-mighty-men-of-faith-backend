import { Sequelize } from "sequelize";
// import { AssociateUserReservation, ReservationFactory } from "./reservation";
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
// ReservationFactory(sequelize);
// AssociateUserReservation();
VehicleFactory(sequelize);

export const db = sequelize;