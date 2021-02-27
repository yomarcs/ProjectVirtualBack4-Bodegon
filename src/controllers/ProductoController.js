const { Producto } = require('../config/Sequelize');
const { Op } = require('sequelize');

const crearProducto = async (req, res) => {
    let producto = req.body;
    try{
        let nuevoProducto = await Producto.create(producto);
        return res.status(201).json({
            ok: true,
            message: 'Producto creado con éxito',
            content: nuevoProducto
        });
    }catch(error){
        return res.status(500).json({
            ok: false,
            message: 'error interno al crear producto',
            content: error
        });
    }
}

const listarProductos = async (req, res) => {
    try{
        let productos = await Producto.findAll({
            attributes: [
            // ['nombre en BD','nombre para mostrar']
                ['producto_nombre','nombre'],
                ['producto_descripcion','descripcion'],
                ['producto_precio','precio'],
                ['producto_stock','stock'],
                ['producto_descuento','descuento'],
                ['producto_imagen','imagen']
            ]
        });
        return res.json({
            ok: true,
            message: null,
            content: productos
        });
    }catch(error){
        return res.status(500).json({
            ok: false,
            message: 'Error interno al listar productos',
            content: error
        });
    }
}

const listarProductoById = async (req, res) => {
    let {id} = req.params;
    try{
        let producto = await Producto.findOne({
            where: {
                productoId: id,
            }, attributes: [
                ['producto_nombre','nombre'],
                ['producto_descripcion','descripcion'],
                ['producto_precio','precio'],
                ['producto_stock','stock'],
                ['producto_descuento','descuento'],
                ['producto_imagen','imagen']]
        });
        return producto ?
        res.json({
            ok: true,
            message: null,
            content: producto
        }) :
        res.status(404).json({
            ok: false,
            message: `No se encontro producto para listar`,
            content: null
        });
    }catch(error){
        return res.status(500).json({
            ok: false,
            message: 'Error interno al listar producto por id',
            content: error
        });
    }
}

const listarProductoLikeNombre = async (req, res) => {
    let {nombre} = req.params;
    try{
        let productos = await Producto.findAll({
            where: {
                productoNombre: {
                    [Op.substring]: nombre
                }
            }, attributes: [
                ['producto_nombre','nombre'],
                ['producto_descripcion','descripcion'],
                ['producto_precio','precio'],
                ['producto_stock','stock'],
                ['producto_descuento','descuento'],
                ['producto_imagen','imagen']]
        });
        if(productos.length !==0){
            return res.json({
                ok: true,
                message: null,
                content: productos
        });
        }else{
            return res.status(404).json({
                ok: false,
                message: 'No se encontraron coincidencias',
                content: null
        })}
    }catch(error){
        return res.status(500).json({
            ok: false,
            message: 'Error interno al listar productos',
            content: null
        });
    }
}

const editarProductoById = async (req, res) => {
    let {id} = req.params;
    try {
        let cantProdActualizados = await Producto.update(req.body,{
            where: {
                productoId: id
            }
        });
        // la promesa no retorna el producto, retorna la cantidad de registros que fue actualizado
        if(cantProdActualizados[0] !== 0){
            let producto = await Producto.findOne({
                where: {
                    productoId:id
                }, attributes: [
                    ['producto_nombre','nombre'],
                    ['producto_descripcion','descripcion'],
                    ['producto_precio','precio'],
                    ['producto_stock','stock'],
                    ['producto_descuento','descuento'],
                    ['producto_imagen','imagen']] 
            });
            return res.status(201).json({
                ok: true,
                message: 'Producto actualizado con éxito',  
                content: producto
            });
        }else{
            return res.status(404).json({
                ok: false,
                message: `No se encontro producto a editar`,  
                content: null
            });
        }
    }catch (error) {
        return res.status(500).json({
            ok: false,
            message: 'Error interno al editar producto',
            content: error
        });
    }
}

const eliminarProductoById = async (req, res) => {
    let {id} = req.params;
    try {
        let cantProdEliminados = await Producto.destroy({
            where: {
                productoId: id
            }
        });
        if(cantProdEliminados[0] !== 0){
            return res.json({
                ok: true,
                message: 'Producto eliminado con éxito',
                content: null
            });
        }else{
            return res.status(404).json({
                ok: false,
                message: `No se encontro producto a eliminar`,
                content: null
            });
        }
    }catch (error) {
        return res.status(500).json({
            ok: false,
            message: 'Error interno al eliminar producto',
            content: error
        });
    }
}

module.exports = {
    crearProducto,
    listarProductos,
    listarProductoById,
    listarProductoLikeNombre,
    editarProductoById,
    eliminarProductoById
}