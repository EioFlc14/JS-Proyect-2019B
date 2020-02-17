/**
 * MedicalCheck.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    patientMedicalHistory: { //patient medical history
      model: 'medicalHistory'
    },
    doctorEncharged: { //doctor encharged
      model: 'user'
    },
    admitDate:{
      type: 'string',
      required: true
    },
    dischargeDate: {
      type: 'string',
      required: false
    },
    bloodPresure: {
      type: 'number',
      required: true
    },
    weight: {
      type: 'number',
      required: true
    },
    diagnosis: {
      type: 'string',
      required: true
    }

  },

};
