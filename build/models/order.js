"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderFactory = exports.Order = void 0;
const sequelize_1 = require("sequelize");
class Order extends sequelize_1.Model {
}
exports.Order = Order;
function OrderFactory(sequelize) {
    Order.init({
        userId: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        locationId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false
        },
        vehicleId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false
        },
        startDate: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        endDate: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        delivery: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        deliveryLocation: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true
        },
        insurance: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false
        },
        insuranceCost: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: true
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
        tableName: 'orders',
        freezeTableName: true,
        sequelize
    });
}
exports.OrderFactory = OrderFactory;
