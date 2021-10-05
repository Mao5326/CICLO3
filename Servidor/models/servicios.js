import mongoose from "mongoose";
const Schema = mongoose.Schema;

const serviciosSchema = new Schema({

  cpeID:{type:String, required:[true, 'CPE ID obligatorio']},
  cpeName:{type:String, required:[true, 'CPE Name obligatorio']},
  ubicacion:{type:String, required:[true, 'Unicación obligatoria']},
  coordenadas:{type:String, required:[true, 'Coordenadas obligatorias']},
  tipoServicio:{type:String, required:[true, 'Tipo de servicio obligatorio']},
  nombreContacto:{type:String, required:[true, 'Nombre de contacto obligatoria']},
  numeroContacto:{type:Number, required:[true, 'Número de contacto obligatorio']},
  clienteID:{type:String, required:[true, 'id de cliente obligatorio']},
  mask:Number,
  tamañoAntena:Number,
  bucW:String,
  bucOL:String,
  lnbOL:String
});

//Convertir a modelo

const Servicios = mongoose.model('Servicios', serviciosSchema);
export default Servicios;