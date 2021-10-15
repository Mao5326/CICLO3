const mongoose = require("mongoose");

const serviciosSchema = mongoose.Schema({
  cpeID: String, 
  cpeName: String,
  ubicacion: String, 
  coordenadas: String, 
  tipoServicio: String,
  nombreContacto: String,
  numeroContacto: Number, 
  clienteID: String, 
  direccionIP: String,
  mask: Number,
  tamañoAntena: Number,
  bucW: String,
  bucOL: String,
  lnbOL: String,
  
})

module.exports = mongoose.model("servicios", serviciosSchema);

