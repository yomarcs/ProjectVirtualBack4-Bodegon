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
            unique: true
        },
        categoriaDescripcion: {
            type: DataTypes.STRING(255),
            field: 'categoria_descripcion'
        }
    },{
        tableName: 't_categoria',
        timestamps: false
    });
   