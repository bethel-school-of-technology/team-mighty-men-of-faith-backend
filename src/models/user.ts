import { DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";

export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>>{
    declare userId: number;
    declare username: string;
    declare password: string;
    declare fname: string;
    declare lname: string;
    declare street: string;
    declare city: string;
    declare state: string;
    declare zip: number;
    declare phone: number;    
    declare createdAt?: Date;
    declare updatedAt?: Date;
}

export function UserFactory(sequelize: Sequelize) {
    User.init({
        userId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        street: {
            type: DataTypes.STRING,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false            
        },
        zip: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        phone: {
            type: DataTypes.INTEGER,
            allowNull: false
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
        tableName: 'users',
        freezeTableName: true,
        sequelize
    });
}