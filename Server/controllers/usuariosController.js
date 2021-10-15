const usuariosModel = require("../models/usuarios");

module.exports = class usuariosController {
    
    
    //get all usuarios
    static async getAllUsuarios (request, response) {
        try{
            const usuarios= await usuariosModel.find();
            response.status(200).json(usuarios);
        } catch(error) {
            response.status(400).json({message: error.message});
        }
    };


    // get by usuarioid
    static async getUsuarioByusuarioid (request, response) {
        try{
            const usuarioid = request.params.usuarioid;
            const usuario = await usuariosModel.find({usuarioid: usuarioid});
            if (usuario != null){
                response.status(200).json(usuario);
            }
        } catch(error) {
            response.status(400).json({message: error.message});
        }
    };

  

    static async delete (request, response) {
        try{
            const usuarioid = request.params.usuarioid;
            await usuariosModel.delete({usuarioid: usuarioid});
            response.status(200).json();
            
        } catch(error) {
            response.status(400).json({message: error.message});
        }
    };



    static async insert (request, response) {
        try{
            const document = request.body;
            //validar la estructur del documento 

            const usuario = await usuarioModel.create(document);
            response.status(200).json(usuario);
            
        } catch(error) {
            response.status(400).json({message: error.message});
        }
    };


    static async update (request, response) {
        try{
            const usuarioid = request.params.usuarioid;
            const data  = request.body;
            const usuario= await usuariosModel.updateOne({usuarioid: usuarioid}, data);
            response.status(200).json();
        
        } catch(error) {
            response.status(400).json({message: error.message});
        }
    };
}