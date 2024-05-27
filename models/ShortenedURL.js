import { Model, DataTypes } from "sequelize";
import { sequelize } from "./index.js";

export default (sequelize, DataTypes) => {
    class ShortenedURL extends Model { }

    ShortenedURL.init(
        {
            orginalUrl: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            shortURL: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            numberOfClicks: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0
            },
            toBeDeleteAt: {
                type: DataTypes.DATE,
                allowNull: true
            }
        },
        {
            sequelize,
            modelName: 'ShortenedURL',
            timestamps: true,
        },
    )
    return ShortenedURL
}
