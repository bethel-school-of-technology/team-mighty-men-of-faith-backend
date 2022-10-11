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
        username: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        fname: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        lname: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        street: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        city: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        state: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        zip: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false
        },
        phone: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false
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
