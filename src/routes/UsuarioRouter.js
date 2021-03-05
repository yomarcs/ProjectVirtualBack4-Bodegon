const { crearUsuario, listarusuarios, listarUsuarioById, listarUsuarioLikeNombre, editarUsuarioById, eliminarUsuarioByID} = require('../controllers/UsuarioController');
const { Router } = require('express');

module.exports =  usuario_router = Router();
usuario_router.post('/usuario', crearUsuario);
usuario_router.get('/usuario', listarusuarios);
usuario_router.get('/usuario/:id', listarUsuarioById);
usuario_router.get('/usuario/buscar/:nombre', listarUsuarioLikeNombre);
usuario_router.put('/usuario/:id', editarUsuarioById);
usuario_router.delete('/usuario/:id', eliminarUsuarioByID);