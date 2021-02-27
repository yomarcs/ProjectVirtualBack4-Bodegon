const express = require('express');
const bodyParser = require('body-parser');
const { conexion } = require('./Sequelize');
const producto_router = require('../routes/ProductoRouter');
const categoria_router = require('../routes/CategoriaRouter');
const marca_router = require('../routes/MarcaRouter');


module.exports = class Server {
    constructor(){
        this.app = express();
        this.puerto = process.env.PORT || 5000;
        this.CORS();
        this.configurarBodyParser();
        this.rutas();
    }

    // Control de acceso
    CORS(){
        this.app.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin","*");
            res.header("Access-Control-Allow-Headers","Content-Type, Authorization");
            res.header("Access-Control-Allow-Methods","GET,POST,PUT,DELETE");
            next();
        })
    }

    configurarBodyParser(){
        this.app.use(bodyParser.json());
    }

    rutas(){
        this.app.get("/", (req, res) => {
            res.status(200).send('La api funciona correctamente 😎🍕');
        });
        this.app.use('', producto_router);
        this.app.use('', categoria_router);
        this.app.use('', marca_router);
    }

    start(){
        this.app.listen(this.puerto, ()=>{
            console.log(`El servidor esta corriendo exitosamente en el puerto ${this.puerto}`);
            conexion.sync().then( ()=>{
                console.log('Base de datos sincronizada correctamente');
            })            
        })
    }
}
