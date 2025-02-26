/**
 * MedicalHistory.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  // primaryKey: 'id',

  attributes: {

    // id: {
    //   type: 'number',
    //   autoIncrement: true
    // },
    record: {
      type: 'string',
      required: true
    },
    users:{
      model: 'user',
      unique: true,
    },
    usersMC: {
      collection:'user',
      via: 'patientMedicalHistory',
      through: 'medicalCheck'
    }

  },

};

