/**
 * Jugador.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombre: {
      type: 'string',
      required: true,
    },
    apellido:{
      type: 'string',
      required: true,
    },
    edad:{
      type: 'number',
      required: true,
    },
    nacionalidad: {
      type: 'string',
      required: true,
    },
    equipo:{
      model: 'equipo',
    },


    carritos: {
      collection: 'CabCarrito',
      via: 'jugador',
      through: 'detCarrito',
    }


  },

};

