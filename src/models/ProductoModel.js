const { DataTypes } = require('sequelize');

module.exports = producto_model = conexion => conexion.define('productos', {
        productoId: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
            field: 'producto_id',
            AllowNull: false
        },
        productoNombre: {
            type: DataTypes.STRING(100),
            field: 'producto_nombre',
            unique: true,
            allowNull: false
        },
        productoDescripcion: {
            type: DataTypes.STRING(255),
            field: 'producto_descripcion',
            allowNull: false
        },
        productoPrecio: {
            type: DataTypes.DECIMAL(6,2),
            field: 'producto_precio',
            allowNull: false,
            validate: {
                min: 1,
                max: 9999
            }
        },
        productoStock: {
            type: DataTypes.INTEGER,
            field: 'producto_stock',
            allowNull: false
        },
        productoDescuento: {
            type: DataTypes.INTEGER,
            field: 'producto_descuento',
            allowNull: false
        },
        productoImagen: {
            type: DataTypes.STRING(255),
            field: 'producto_imagen',
            allowNull: false
        }
    },{
        tableName: 't_producto',
        timestamps: false
    });

