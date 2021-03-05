const { Usuario } = require('../config/Sequelize');
const { Op } = require('sequelize');

const crearUsuario = (req, res) => {
    Usuario.create(req.body).then((nuevoUsuario) => {
        return res.status(201).json({
            ok: true,
            message: 'Usuario creado con éxito',
            content: nuevoUsuario
        });
    }).catch((error) => {
        return res.status(500).json({
            ok: false,
            message: 'Error interno al crear usuario',
            content: error
        });
    })
}

const listarusuarios = (req, res) => {
    let {id} = req.params;
    Usuario.findAll({
        attributes: [
            ['usuario_id','id'],
            ['usuario_nombre','nombre'],
            ['usuario_correo','correo'],
            ['usuario_direccion','direccion'],
            ['usuario_telefono','telefono'],
            ['usuario_contrasena','contrasena'],
            ['usuario_imagen','imagen']
        ]
    }).then((usuarios) => {
        if(usuarios.length !== 0){
            return res.json({
                ok: true,
                message: null,
                content: usuarios
            });
        }else{
            return res.status(404).json({
                ok: false,
                message: 'No se encontraron usuarios para listar',
                content: null
            });
        }
    }).catch((error) => {
        return res.status(500).json({
            ok: false,
            message: 'Error interno al listar usuarios',
            content: error
        });
    })
}

const listarUsuarioById = (req, res) => {
    let {id} =req.params;
    Usuario.findOne({
        where: {
            usuarioId: id
        },
        attributes: [
            ['usuario_id','id'],
            ['usuario_nombre','nombre'],
            ['usuario_correo','correo'],
            ['usuario_direccion','direccion'],
            ['usuario_telefono','telefono'],
            ['usuario_contrasena','contrasena'],
            ['usuario_imagen','imagen']
        ]
    }).then((usuario) => {
        console.log(usuario);
        if(usuario){
            return res.json({
                ok: true,
                message: null,
                content: usuario
            });
         }else{
            return res.json({
                ok: false,
                message: 'No se encontro usuario para listar',
                content: null
            });
         }
    }).catch((error) => {
        return res.status(500).json({
            ok: false,
            message: 'Error interno al listar usuario',
            content: error
        });
    })
}

const listarUsuarioLikeNombre =(req, res) => {
    let {nombre} = req.params;
    Usuario.findAll({
        where: {
            usuarioNombre: {
                [Op.substring] : nombre
            }
        },
        attributes: [
            ['usuario_id','id'],
            ['usuario_nombre','nombre'],
            ['usuario_correo','correo'],
            ['usuario_direccion','direccion'],
            ['usuario_telefono','telefono'],
            ['usuario_contrasena','contrasena'],
            ['usuario_imagen','imagen']
        ]
    }).then((usuarios) => {
        console.log(usuarios);
        if(usuarios.length !== 0){
            return res.json({
                ok: true,
                message: null,
                content: usuarios
            });
        }else{
            return res.status(404).json({
                ok: false,
                message: 'No se encontraron coincidencias',
                content: null
            });
        }
    }).catch( (error) => {
        return res.status(500).json({
            ok: false,
            message: 'Error interno al buscar usuario',
            content: error
        });
    })
}

const editarUsuarioById = (req, res) => {
    let {id} = req.params;
    Usuario.update(req.body,{
        where: {
            usuarioId: id
        }
    }).then( async(canUsuActualizadas) => {
        console.log(canUsuActualizadas);
        if(canUsuActualizadas[0] !== 0){
            let usuarioActualizado = await Usuario.findOne({
                where: {
                    usuarioId: id
                },
                attributes: [
                    ['usuario_id','id'],
                    ['usuario_nombre','nombre'],
                    ['usuario_correo','correo'],
                    ['usuario_direccion','direccion'],
                    ['usuario_telefono','telefono'],
                    ['usuario_contrasena','contrasena'],
                    ['usuario_imagen','imagen']
                ]
            });
            return res.json({
                ok: true,
                message: 'Categoria actualizada con éxito',
                content: usuarioActualizado               
            });
        }else{
            return res.status(404).json({
                ok: false,
                message: 'No se encontro usuario ha actualizar',
                content: null
            });
        }
    }).catch((error) => {
        return res.status(500).json({
            return: false,
            message:'Error interno al editar usuario',
            content: error
        })
    })
}

const eliminarUsuarioByID = (req, res) => {
    let {id} = req.params;
    Usuario.destroy({
        where: {
            usuarioId: id
        }
    }).then((canUsuEliminados)=>{
        console.log(canUsuEliminados);
        if(canUsuEliminados !== 0){
            return res.json({
                ok: true,
                message: 'Usario eliminado con éxito',
                content: null
            });
        }else{
            return res.status(404).json({
                ok: false,
                message: 'No se encontro usuario ha eliminar',
                content: null
            });
        }
    }).catch((error) => {
        return res.status(500).json({
            ok: false,
            message: 'Error interno al eliminar usuario',
            content: error
        })
    })
}

module.exports = {
    crearUsuario,
    listarusuarios,
    listarUsuarioById,
    listarUsuarioLikeNombre,
    editarUsuarioById,
    eliminarUsuarioByID
}