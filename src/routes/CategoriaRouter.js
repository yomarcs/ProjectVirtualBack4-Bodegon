const { Router } = require('express');
const { crearCategoria, listarCategorias, listarCategoriaById, editarCategoriaById, eliminarCategoriaById, listarCategoriaLikeNombre } = require('../controllers/CategoriaController');

module.exports = categoria_router = Router();
categoria_router.post('/categoria', crearCategoria);
categoria_router.get('/categoria', listarCategorias);
categoria_router.get('/categoria/:id', listarCategoriaById);
categoria_router.get('/categoria/buscar/:nombre', listarCategoriaLikeNombre);
categoria_router.put('/categoria/:id', editarCategoriaById);
categoria_router.delete('/categoria/:id', eliminarCategoriaById);
