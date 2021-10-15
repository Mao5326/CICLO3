const serviciosModel = require("../models/serviciosModel");

module.exports = class serviciosController {
    
    
    //get all sevicios
    static async getAllServicios (request, response) {
        try{
            const servicios = await serviciosModel.find();
            if (servicios != null) {
                response.status(200).json(servicios);
              } else {
                response.status(404).json();
              }
            } catch (error) {
              response.status(400).json({message: error.message});
            }
            
    };


    // get by cpeID 
    static async getServicioBycpeID (request, response) {
        try {
          const cpeID = request.params.cpeID;
          const servicio = await serviciosModel.findOne({cpeID: cpeID});
          if (servicio != null) {
            response.status(200).json(servicio);
          } else {
            response.status(404).json();
          }
        } catch (error) {
          response.status(400).json({message: error.message});
        }
    
    };
    static async insertServicio (request, response) {
        try {
        const document = request.body;
        const servicio = await serviciosModel.create(document);
        response.status(201).json(servicio);
        } catch (error) {
        response.status(400).json({message: error.message});
        }
    };
 
    static async deleteServicio (request, response) {
            try {
              const cpeID = request.params.cpeID;
              const servicio = await serviciosModel.findOneAndDelete({cpeID: cpeID});
              response.status(200).json();
             // if (servicio.acknowledged != false) {
              // response.status(200).json(servicio);
              //} else {
              //response.status(200).json({message: `Error al actualizar: no existe un documento con isbn ${cpeID}`})
             // }
            } catch (error) {
              response.status(400).json({message: error.message})
            }
    };
    
       


    static async updateServicio (request, response) {
        try{
            const cpeID = request.params.cpeID;
            const data  = request.body;
            const servicio = await serviciosModel.updateOne({cpeID: cpeID}, data);
            
            if (servicio.acknowledged != false) {
                response.status(200).json(servicio);
              } else {
                response.status(200).json({message: `Error al actualizar: no existe un documento con isbn ${cpeID}`})
              }
        
        } catch(error) {
            response.status(400).json({message: error.message});
        }
    };
}