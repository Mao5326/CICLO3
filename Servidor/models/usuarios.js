import mongoose from "mongoose";
const Schema = mongoose.Schema;

const usuariosSchema = new Schema({

  nombre:{type:String, required:[true, 'Nombre obligatorio']},
  apellido:{type:String, required:[true, 'Apellido obligatorio']},
  celular:{type:Number, required:[true, 'Número obligatorio']},
  usuarioid:String,
  email:{type:String, required:[true, 'Correo obligatorio']},
  contraseña:{type:String, required:[true, 'Contraseña obligatoria']}
});

//Convertir a modelo

const Usuarios = mongoose.model('Usuarios', usuariosSchema);
export default Usuarios;