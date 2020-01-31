/**
 * Specialty.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {


  attributes: {

    id: {
      type: 'number',
      unique: true,
      autoIncrement: true,
      required: true
    },
    specialty: {
      type: 'string',
      required:true
    },
    users:{
      collection: 'user',
      via: 'specialties'
    }

  },



};

