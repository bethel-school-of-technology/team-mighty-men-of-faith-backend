import { DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";
import { User } from "./user";

export class Order extends Model<InferAttributes<Order>, InferCreationAttributes<Order>>{
    declare orderId: number;
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
        orderId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
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
            allowNull: false,
            defaultValue: false
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

export function AssociateUserOrder() {
    User.hasMany(Order, { foreignKey: 'userId' });
    Order.belongsTo(User, { foreignKey: 'userId' });
}