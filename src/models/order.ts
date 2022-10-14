import { DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";

export class Order extends Model<InferAttributes<Order>, InferCreationAttributes<Order>>{
    declare orderID: number;
    declare userId: number;
    declare locationId: number;
    declare vehicleId: number;
    declare startDate: string;
    declare endDate: string;
    declare delivery: boolean;
    declare deliveryLocation: string;
    declare insurance: boolean;
    declare insuranceCost: number;    
    declare createdAt?: Date;
    declare updatedAt?: Date;
}

export function OrderFactory(sequelize: Sequelize) {
    Order.init({
        orderID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false
        },
        locationId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        vehicleId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        startDate: {
            type: DataTypes.STRING,
            allowNull: false
        },
        endDate: {
            type: DataTypes.STRING,
            allowNull: false
        },
        delivery: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        deliveryLocation: {
            type: DataTypes.STRING,
            allowNull: true
        },
        insurance: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        insuranceCost: {
            type: DataTypes.INTEGER,
            allowNull: true
        },        
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        }
    }, {
        tableName: 'orders',
        freezeTableName: true,
        sequelize
    });
}