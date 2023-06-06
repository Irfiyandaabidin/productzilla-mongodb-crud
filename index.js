const express = require('express');
const swaggerUi = require('swagger-ui-express');
const mongoose = require('./database/index');
const PORT = 3001;
const app = express();
const bodyParser = require('body-parser');
const mahasiswaRoute = require('./src/routes/mahasiswa-route');
const mataKuliahRoute = require('./src/routes/matakuliah-route');
const YAML = require('yaml');
const fs = require('fs');
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const fileSwagger = fs.readFileSync('./src/swagger/swagger.yaml', 'utf8');
const swaggerDocument = YAML.parse(fileSwagger);

mongoose.connection.once('open', () => {
    app.listen(PORT, () => {
        console.log('Server running in port ', PORT);
    })    
});
app.use(
    cors({
        origin: '*',
    })
)
app.use('/mahasiswa', mahasiswaRoute);
app.use('/mata-kuliah', mataKuliahRoute);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));