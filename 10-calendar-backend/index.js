const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./database/config');

const app = express();
dbConnection();
app.use(cors());

// Directorio público
app.use(express.static('public'));
app.use(express.json());

// Rutas
app.use('/api/auth', require('./routes/auth'));

const { PORT } = process.env;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${ PORT }`);
});
