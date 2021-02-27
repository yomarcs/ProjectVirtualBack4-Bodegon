const { crearMarca, listarMarcas, listarMarcaById, editarMarcaById, eliminarMarcaById, listarMarcasLikeNombre } = require('../controllers/MarcaController');
const { Router } = require('express');

module.exports = marca_router = Router();
marca_router.post('/marca', crearMarca);
marca_router.get('/marca', listarMarcas);
marca_router.get('/marca/:id', listarMarcaById);
marca_router.get('/marca/buscar/:nombre', listarMarcasLikeNombre);
marca_router.put('/marca/:id', editarMarcaById);
marca_router.delete('/marca/:id', eliminarMarcaById);
