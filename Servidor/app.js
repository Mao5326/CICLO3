//Instalar, Requerir y Usar!!

//Requerir (importar)
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

const app = express();

//CONEXIÓN A BASE DE DATOS
const mongoose = require('mongoose');
const uri = 'mongodb+srv://Sergio:SSalazarZ121@satnetcluster.aq8xy.mongodb.net/SatnetDB';
const options = {useNewUrlParser: true, useUnifiedTopology: true};

mongoose.connect(uri, options).then(
  () => { console.log('Conectado a la DB'); },
  err => { console.log(err) }
);

//MIDDLEWARE
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true}));

//ruta
// app.get('/', function(request, response) {

//   response.send('Hola Mundo');

// });

app.use('/api', require('./routes/usuariosRuta'));
app.use('/api', require('./routes/serviciosRuta'));

//Midddleware para vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));


//PUERTOS
//--- PUERTO ESTATICO ---
// app.listen(3000, function() {

//   console.log("El servidor escucha por el puerto 3000!");

// });

//---- PUERTO DINAMICO ----
app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), function() {
  console.log('El servidor esta escuchando por el puerto ' + app.get('puerto') + '!');
});