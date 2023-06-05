const express = require('express');
const mongoose = require('./database/index');
const PORT = 3001;
const app = express();
const bodyParser = require('body-parser');
const mahasiswaRoute = require('./src/routes/mahasiswa-route');
const mataKuliahRoute = require('./src/routes/matakuliah-route');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connection.once('open', () => {
    app.listen(PORT, () => {
        console.log('Server running in port ', PORT);
    })    
})

app.use('/mahasiswa', mahasiswaRoute);
app.use('/mata-kuliah', mataKuliahRoute);