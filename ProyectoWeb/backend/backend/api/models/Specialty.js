/**
 * Specialty.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    specialty_id: {
      type: 'number',
      required: true
    },
    specialty: {
      type: 'string',
      required:true
    }
  }



};

