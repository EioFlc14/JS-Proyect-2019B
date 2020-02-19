/**
 * DetCarrito.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    jugador: {
      model: 'jugador',
    },
    cabeceraCarrito: {
      model: 'cabCarrito',
    },
    cantidad: {
      type: 'number',
      required: true,
    },
    precio: {
      type: 'number',
      required: true,
    },
    subtotal: {
      type: 'number',
      required: true,
    }
  }
};

