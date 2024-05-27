import { Sequelize } from "sequelize";
import "dotenv/config.js";
import ShortenedURL from "./ShortenedURL.js"

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})

const ShortenedURLModel = ShortenedURL(sequelize, Sequelize)

async function syncDatabase() {
    try {
        await sequelize.sync({ alter: true });
        console.log('Model synchronized successfully');
    } catch (error) {
        console.error('Unable to synchronize models with the database:', error);
    }
}

syncDatabase();

const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

export { sequelize, testConnection };