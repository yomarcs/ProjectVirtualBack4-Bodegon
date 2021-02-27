const { DataTypes } = require('sequelize');

module.exports = marca_model = conexion => conexion.define('marcas', {
        marcaId: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
            field: 'marca_id',
            allowNull: false
        },
        marcaNombre: {
            type: DataTypes.STRING(45),
            field: 'marca_nombre',
            unique: true
        }
    },{
        tableName: 't_marca',
        timestamps: false
    });
