const express = require("express");

const serviciosController = require("../controllers/serviciosController");

const router = express.Router();


// rutas de servicios 

router.get('/servicios', serviciosController.getAllServicios);
router.get('/servicios/cpeID/:cpeID', serviciosController.getServicioBycpeID);
router.delete('/servicios/cpeID/:cpeID', serviciosController.deleteServicio);
router.post('/servicios', serviciosController.insertServicio);
router.put('/servicios/cpeID/:cpeID', serviciosController.updateServicio);
//router.post('/servico-nuevo', serviciosController.insertServicio);


module.exports = router;

