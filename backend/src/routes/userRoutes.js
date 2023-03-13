const express = require('express');
const router = express.Router();

const middlewareCargo = require('../middleware/capturarCargo');

const userController = require('../controllers/userController');

router.post("/novosUsuarios", middlewareCargo.capturarCargo, userController.create);
router.delete('/delete/:id', userController.delete);
router.get('/usuarios', userController.getUsuarios);

module.exports = router;
