const { Categoria } = require('../config/Sequelize');
const { Op } = require('sequelize');

const crearCategoria = (req, res) => {
    Categoria.create(req.body,{
        // attributes: [
        //     ['categoria_id','id'],
        //     ['categoria_estado','estado'],
        //     ['categoria_nombre','nombre'],
        //     ['categoria_descripcion','descripcion']
        // ]
    }).then((nuevaCategoria)=>{
        return res.status(201).json({
            ok: true,
            message: 'Categoria creada con éxito',
            content: nuevaCategoria
        })
    }).catch((error)=>{
        return res.status(500).json({
            ok: false,
            message: 'Error interno al crear Categoria',
            content: error
        })
    })
}

const listarCategorias = (req, res) => {
    Categoria.findAll({
        attributes: [
            ['categoria_id','id'],
            ['categoria_estado','estado'],
            ['categoria_nombre','nombre'],
            ['categoria_descripcion','descripcion']
        ]
    }).then((categorias)=>{
        if(categorias.length !== 0){
            return res.json({
                ok: true,
                message: null,
                content: categorias
            })
        }else{
            return res.status(404).json({
                ok: false,
                message: 'No se encontraron categorias para listar',
                content: null
            })
        }
    }).catch((error)=>{
        return res.status(500).json({
            ok: false,
            message: 'Error interno al listar categorias',
            content: error
        })
    })
}

const listarCategoriaById = (req, res) => {
    let {id} = req.params;
    Categoria.findOne({
        where: {
            categoriaId: id
        }, 
        attributes: [
            ['categoria_id','id'],
            ['categoria_estado','estado'],
            ['categoria_nombre','nombre'],
            ['categoria_descripcion','descripcion']
        ]
    }).then((nuevaCategoria)=>{
        if(nuevaCategoria){
            return res.json({
                ok: true,
                message: null,
                content: nuevaCategoria
            })
        }else{
            return res.status(404).json({
                ok: false,
                message: `No se encontro categoria para listar`,
                contetnt: null
               })
            }
    }).catch((error)=>{
        return res.status(500).json({
            ok: false,
            message: 'Error interno al listar producto',
            content: error
        })
    })
}

const listarCategoriaLikeNombre = (req, res) => {
    let {nombre} = req.params;
    Categoria.findAll({
        where: {
            categoriaNombre: {
                [Op.substring]: nombre
            }
        }, attributes: [
            ['categoria_id','id'],
            ['categoria_estado','estado'],
            ['categoria_nombre','nombre'],
            ['categoria_descripcion','descripcion']]
    }).then((categorias) => {
        if(categorias.length !== 0){
            return res.json({
                ok: true,
                message: null,
                content: categorias
            });
        }else{
            return res.status(404).json({
                ok: false,
                message: 'No se encontro coincidencias',
                content: null
            }); 
        }
    }).catch((error) =>{
        return res.status(500).json({
            ok: false,
            message: 'Error interno al buscar coincidencias',
            content: null
        });
    })
    
}

const editarCategoriaById = (req, res) => {
    let {id} = req.params;
    Categoria.update(req.body,{
        where: {
            categoriaId: id
        }
    }).then( async (canCatActualizadas)=>{
        console.log(canCatActualizadas);
        if(canCatActualizadas[0] !== 0){
            let categoria = await Categoria.findOne({
                where: {
                    categoriaId: id
                },
                attributes: [
                    ['categoria_id','id'],
                    ['categoria_estado','estado'],
                    ['categoria_nombre','nombre'],
                    ['categoria_descripcion','descripcion']
                ]
            });
            return res.json({
                ok: true,
                message: 'Categoria actualizada con éxito',
                content: categoria                
            })
        }else{
            return res.status(404).json({
                ok: false,
                message: `No se encontro categoria ha actualizar`,  
                content: null
            });
        }
    }).catch((error)=>{
        return res.status(500).json({
             ok: false,
             message: 'Error interno al actualizar categoria',
             content: error
        })
    })
}

const eliminarCategoriaById = (req, res) => {
    let {id} = req.params;
    Categoria.destroy({
        where: {
            categoriaId: id
        }
    }).then((cantCatEliminadas)=>{
        if(cantCatEliminadas !== 0){
            return res.json({
                ok: true,
                message: 'Categoria eliminada con éxito',
                content: null
            })
        }else{
            return res.status(404).json({
                ok: false,
                message: `No se encontro categoria ha eliminar`,
                content: null
            })
        }
    }).catch((error)=>{
        return res.status(500).json({
            ok: false,
            message: 'Error interno al eliminar categoria',
            content: error
        })
    })
}

const in_habilitarCategoria = (req, res) => {
    let {id} = req.params;
    Categoria.findByPk(id).then((categoriaEncontrada) => {
         if(categoriaEncontrada){
            return Categoria.update({categoriaEstado : !categoriaEncontrada.categoriaEstado},{
                    where: {
                        categoriaId: id
                    },
                    attributes: [
                        ['categoria_id','id'],
                        ['categoria_estado','estado'],
                        ['categoria_nombre','nombre'],
                        ['categoria_descripcion','descripcion']
                    ]
                })
            }else{
                res.status(404).json({
                    ok: false,
                    message: "Categoria no existe",
                    content: null
                })
            }

    }).then(()=>{
        return Categoria.findByPk(id);
    }).then((categoriaActualizada) => {
        return res.status(201).json({
            ok: true, 
            content: categoriaActualizada.categoriaEstado?'Se habilito exitosamente':'Se inhabilito exitosamente',
            message: 'Categoria actualizada con éxito'
        })
    }).catch((error) => {
        return res.status(500).json({
            ok: false,
            message: 'Error interno al actualizar estado',
            content: error
        })
    })
}

module.exports = {
    crearCategoria,
    listarCategorias,
    listarCategoriaById,
    listarCategoriaLikeNombre,
    editarCategoriaById,
    eliminarCategoriaById,
    in_habilitarCategoria
}