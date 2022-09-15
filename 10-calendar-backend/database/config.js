const mongoose = require('mongoose');

const dbConnection = async() => {
    try{
        mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('DB connected');
    }catch(error){
        console.log(error);
        throw new Error('Error al conectar con la base de datos');
    }
};


module.exports = {
    dbConnection
};
