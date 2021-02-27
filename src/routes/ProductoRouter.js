const { crearProducto, listarProductos, listarProductoById, editarProductoById, eliminarProductoById, listarProductoLikeNombre} = require('../controllers/ProductoController');
const { Router } = require('express');

module.exports = producto_router = Router();
producto_router.post('/producto', crearProducto);
producto_router.get('/producto', listarProductos);
producto_router.get('/producto/:id', listarProductoById);
producto_router.get('/producto/buscar/:nombre', listarProductoLikeNombre);
producto_router.put('/producto/:id', editarProductoById);
producto_router.delete('/producto/:id', eliminarProductoById);
