const { Marca } = require('../config/Sequelize');
const { Op } = require('sequelize');

const crearMarca = async(req, res) => {
    try{
        let nuevaMarca = await Marca.create(req.body,{
            // attributes: [
            //     ['marca_id','id'],
            //     ['marca_nombre','nombre']
            // ]
        });
        return res.status(201).json({
            ok: true,
            message: 'Marca creada con éxito',
            content: nuevaMarca
        })
    }catch(error){
        return res.status(500).json({
            ok: false,
            message:'Error interno al crear marca',
            content: error
        })
    }
}

const listarMarcas = async(req, res) => {
    try {
        let marcas = await Marca.findAll({
            attributes: [
                ['marca_id','id'],
                ['marca_nombre','nombre']
            ]
        });
        if(marcas.length !==0){
            return res.json({
                ok: true,
                message: null,
                content: marcas
            });
        }else{
            return res.status(404).json({
                ok: false,
                message: 'No se encontraron marcas para listar',
                content: null
            });
        }
    } catch (error) {
        return res.status(500).json({
            ok: false,
            message: 'Error interno al listar marcas',
            content: error
        });
    }

}

const listarMarcaById = async (req, res) => {
    try {
        let {id} = req.params;
        let marca = await Marca.findOne({
            where: {
                marcaId: id
            },
            attributes: [
                ['marca_id','id'],
                ['marca_nombre','nombre']
            ]
        });
        if(marca){
            return res.json({
                ok: true,
                message: null,
                content: marca
            });
        }else{
            res.status(404).json({
            ok: false,
            message: `No se encontro marca para listar`,
            content: null
        });
        }
    }catch (error) {
        return res.status(500).json({
            ok: false,
            message: 'Error interno al listar marca',
            content: error
        })
    }
}

const listarMarcasLikeNombre = async (req, res) => {
    try{
        let {nombre} = req.params;
        let marcas = await Marca.findAll({
            where: {
                marcaNombre: {
                    [Op.substring]: nombre
                }
            },
            attributes: [
                ['marca_id','id'],
                ['marca_nombre','nombre']
            ]
        });
        if(marcas[0] !== 0){
            return res.json({
                ok: true,
                message: null,
                content: marcas
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
            message: 'Error interno al listar marcas',
            content: error
        });
    }
}

const editarMarcaById = async(req, res) => {
    try{
        let {id} = req.params
        let resultado = await Marca.update(req.body,{
            where: {
                marcaId: id
            }            
        });
        if(resultado[0] !== 0){
            marcaActualizada = await Marca.findOne({
                where: {
                    marcaId: id
                },
                attributes: [
                    ['marca_id','id'],
                    ['marca_nombre','nombre']]
            });
            return res.json({
                ok: true,
                message: 'Marca actualizada con éxito',
                content: marcaActualizada
            })
        }else{
            return res.status(404).json({
                ok: false,
                message: 'No se encontro marca ha actualizar',
                content: null
        })};
    }catch (error) {
        return res.status(500).json({
            ok: false,
            message: 'Error interno al listar marca',
            content: error
        })
    }
}

const eliminarMarcaById = async(req, res) => {
    try {
        let {id} = req.params;
        let resultado = await Marca.destroy({where: {marcaId : id}});
        if(resultado !== 0){
            return res.json({
                ok: true,
                message: 'Marca eliminada con éxito',
                content: null
            });
        }else{
            return res.status(404).json({
                ok: false,
                message: `No se encontro marca ha aliminar`,
                content: null
            });
        }
    }catch (error) {
        return res.status(500).json({
            ok: false,
            message: 'Error interno al eliminar marca',
            content: error
        }); 
    }
}

module.exports = {
    crearMarca,
    listarMarcas,
    listarMarcaById,
    listarMarcasLikeNombre,
    editarMarcaById,
    eliminarMarcaById
}