const mongoose = require("mongoose");

const usuariosSchema = mongoose.Schema({

  nombre:{type:String, required:[true, 'Nombre obligatorio']},
  apellido:{type:String, required:[true, 'Apellido obligatorio']},
  celular:{type:Number, required:[true, 'Número obligatorio']},
  usuarioid:{String,required:[true, 'usuarioid obligatorio']},
  email:{type:String, required:[true, 'Correo obligatorio']},
  contraseña:{type:String, required:[true, 'Contraseña obligatoria']}
})

module.exports = mongoose.model("usuarios", usuariosSchema);
