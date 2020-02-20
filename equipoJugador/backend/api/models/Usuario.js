/**
 * Usuario.js
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
    username:{
      type: 'string',
      required: true,
      unique: true,
    },
    password:{
      type: 'string',
      required: true,
    },
    rol: {
      type: 'string',
      required: true
    },
    carritos:{
      collection: 'CabCarrito',
      via: 'usuario',
    }

  },

};

