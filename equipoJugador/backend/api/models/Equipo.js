/**
 * Equipo.js
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
    estadio: {
      type: 'string',
      required: true
    },
    jugadores: {
      collection: 'jugador',
      via: 'equipo',
    }


  },

};

