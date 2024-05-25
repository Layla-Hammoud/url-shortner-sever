import express from 'express';
import db from './models/index.js';

const app = express()
const port = process.env.PORT || 4000

app.listen(port, async () => {
    console.log(`The server is runnig on port ${port}`)
    db.testConnection()
})