import express from 'express';
const router = express.Router();

import Usuarios from '../models/usuarios';

//Agregar un usuario
router.post('/usuario-nuevo', async (request, response) => {

  const body = request.body;

  try {

    const usuarioDB = await Usuarios.create(body);
    response.status(200).json(usuarioDB);

  } catch (error) {

    return response.status(500).json({
      mensaje: 'Ocurrió un error',
      error
    })

  }

});

//obtener usuario por id
router.get('/usuario/:id', async(request, response) => {
  const _id = request.params.id;

  try {

    const usuarioDB = await Usuarios.findOne({_id});
    response.json(usuarioDB);

  } catch (error) {

    return response.status(500).json({
      mensaje: 'Ocurrió un error',
      error
    })

  }
});

//obtener todos los usuarios
router.get('/usuario', async(request, response) => {

  try {

    const usuarioDB = await Usuarios.find();
    response.json(usuarioDB);

  } catch (error) {

    return response.status(500).json({
      mensaje: 'Ocurrió un error',
      error
    })

  }
});

//borrar usuario por id
router.delete('/usuario/:id', async(request, response) => {

  const _id = request.params.id;

  try {

    const usuarioDB = await Usuarios.findByIdAndDelete({_id});

    if (!usuarioDB) {

      return response.status(400).json({
        mensaje: 'No se encontró el id indicado',
        error
      })
    }

    response.json(usuarioDB);

  } catch (error) {

    return response.status(500).json({
      mensaje: 'Ocurrió un error',
      error
    })

  }

});

//Actualizar un usuario
router.put('/usuario/:id', async(request, response) => {
  const _id = request.params.id;
  const body = request.body;

  try {
    const usuarioDB = await Usuarios.findByIdAndUpdate(
      _id, body, {new: true});

      response.json(usuarioDB);

  } catch (error) {

    return response.status(400).json({
      mensaje: 'Ocurrió un error',
      error
    })

  }
});

module.exports = router;