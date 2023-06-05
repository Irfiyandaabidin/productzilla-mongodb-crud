const mongoose = require('mongoose');
require('dotenv').config();

const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;
const dbName = process.env.DB_NAME;

mongoose.connect(`mongodb://${dbHost}:${dbPort}/${dbName}`, { useNewUrlParser: true })
    .then(() => {
        console.log('Database connected');
    })
    .catch((err) => {
        console.log(err)
    })

module.exports = mongoose;