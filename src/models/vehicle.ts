import { DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";
import { User } from "./user";

export class Vehicle extends Model<InferAttributes<Vehicle>, InferCreationAttributes<Vehicle>> {
    declare vehicleID: number;
    // declare userId: number;
    declare make: string;
    declare model: string;
    declare year: number;
    declare photoURL: string;
    declare location: string;
    declare createdAt?: Date;
    declare updatedAt?: Date;
}

export function VehicleFactory(sequelize: Sequelize) {
   Vehicle.init({
    vehicleID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    
    // userId: {
    //     type: DataTypes.NUMBER,
    //     allowNull: false,
    // },

    make: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    model: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    photoURL: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false,
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
    tableName: 'vehicles',
    freezeTableName: true,
    sequelize
   }); 
}

