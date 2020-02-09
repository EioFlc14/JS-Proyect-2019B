/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  primaryKey: 'id',

  attributes: {

    id: {
      type: 'number',
      autoIncrement: true
    },
    userIdentificator: {
      type: 'string',
      required: true
    },
    userUsername: {
      type: 'string',
      required:true
    },
    userPassword: {
      type:'string',
      required: true
    },
    userName: {
      type:'string',
      required:true
    },
    userLastname: {
      type:'string',
      required:true
    },
    userBirthdate:{
      type: 'string',
      required: true
    },
    specialties:{
      collection: 'specialty',
      via: 'users'
    },
    roles:{
      collection: 'role',
      via:'users'
    },
    medicalHistory:{
      collection:'medicalHistory',
      via: 'users'
    }

  },

};

