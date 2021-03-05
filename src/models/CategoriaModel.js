const { DataTypes } = require('sequelize');

module.exports = categoria_model = conexion => conexion.define('categorias',{
        categoriaId: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
            field: 'categoria_id',
            allowNull: false
        },
        categoriaNombre: {
            type: DataTypes.STRING(40),
            field:'categoria_nombre',
            unique: true,
            allowNull: false
        },
        categoriaDescripcion: {
            type: DataTypes.STRING(255),
            field: 'categoria_descripcion',
            allowNull: false
        },
        categoriaEstado: {
            type: DataTypes.BOOLEAN,
            field: 'categoria_estado',
            defaultValue: true,
            // allowNull: false
            // Las categorias creadas antes de definir categoriaEstado estan en false, tenemos que actualizarlas desde MySQL
            // UPDATE t_categoria SET categoria_estado = true;
            // sino nos perite y nos sale un error 1175, es pq debemos darle permiso a workbench por no tener un where en la sentencia
            // SET SQL_SAFE_UPDATES = 0; 
        }
    },{
        tableName: 't_categoria',
        timestamps: false
    });
   