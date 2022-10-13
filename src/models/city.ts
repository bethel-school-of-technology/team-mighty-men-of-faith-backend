import { DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";

export class City extends Model<InferAttributes<City>, InferCreationAttributes<City>>{
    declare cityId: number;
    declare city: string;
}

export function CityFactory(sequelize: Sequelize) {
    City.init({
        cityId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    }, {
        freezeTableName: true,
        tableName: 'cities',
        sequelize
    });
}