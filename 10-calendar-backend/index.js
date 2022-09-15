const express = require('express');
const app = express();

require('dotenv').config();

// Directorio público
app.use(express.static('public'));
app.use(express.json());

// Rutas
app.use('/api/auth', require('./routes/auth'));

const { PORT } = process.env;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${ PORT }`);
});
