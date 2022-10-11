"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleFactory = exports.Vehicle = void 0;
const sequelize_1 = require("sequelize");
class Vehicle extends sequelize_1.Model {
}
exports.Vehicle = Vehicle;
function VehicleFactory(sequelize) {
    Vehicle.init({
        vehicleID: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        // userId: {
        //     type: DataTypes.NUMBER,
        //     allowNull: false,
        // },
        make: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        model: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        year: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        photoURL: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        location: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        createdAt: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        updatedAt: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        }
    }, {
        tableName: 'vehicles',
        freezeTableName: true,
        sequelize
    });
}
exports.VehicleFactory = VehicleFactory;
