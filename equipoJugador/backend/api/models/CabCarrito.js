/**
 * CabCarrito.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    fecha: {
      type: 'string',
      required: true,
    },
    direccion: {
      type: 'string',
      required: true,
    },
    total: {
      type: 'number',
      required: true,
    },
    estado: {
      type: 'string',
      required: true,
    },
    usuario:{
      model: 'usuario',
    },



    jugadores:{
      collection: 'jugador',
      via: 'cabeceraCarrito',
      through: 'detCarrito',
    },




  }

};

