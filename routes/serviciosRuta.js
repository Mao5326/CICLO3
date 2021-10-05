import express from 'express';
const router = express.Router();

import Servicios from '../models/servicios';

//Agregar un servicio
router.post('/servicio-nuevo', async (request, response) => {

  const body = request.body;

  try {

    const servicioDB = await Servicios.create(body);
    response.status(200).json(servicioDB);

  } catch (error) {

    return response.status(500).json({
      mensaje: 'Ocurrió un error',
      error
    })

  }

});

//obtener servicio por id
router.get('/servicio/:id', async(request, response) => {
  const _id = request.params.id;

  try {

    const servicioDB = await Servicios.findOne({_id});
    response.json(servicioDB);

  } catch (error) {

    return response.status(500).json({
      mensaje: 'Ocurrió un error',
      error
    })

  }
});

//obtener todos los servicios
router.get('/servicio', async(request, response) => {

  try {

    const servicioDB = await Servicios.find();
    response.json(servicioDB);

  } catch (error) {

    return response.status(500).json({
      mensaje: 'Ocurrió un error',
      error
    })

  }
});

//borrar servicio por id
router.delete('/servicio/:id', async(request, response) => {

  const _id = request.params.id;

  try {

    const servicioDB = await Servicios.findByIdAndDelete({_id});

    if (!servicioDB) {

      return response.status(400).json({
        mensaje: 'No se encontró el id indicado',
        error
      })
    }

    response.json(servicioDB);

  } catch (error) {

    return response.status(500).json({
      mensaje: 'Ocurrió un error',
      error
    })

  }

});

//Actualizar un servicio
router.put('/servicio/:id', async(request, response) => {
  const _id = request.params.id;
  const body = request.body;

  try {
    const servicioDB = await Servicios.findByIdAndUpdate(
      _id, body, {new: true});

      response.json(servicioDB);

  } catch (error) {

    return response.status(400).json({
      mensaje: 'Ocurrió un error',
      error
    })

  }
});

module.exports = router;