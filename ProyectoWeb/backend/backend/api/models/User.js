/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    id: {
      type: 'number',
      unique: true,
      required: true
    },
    user_identificator: {
      type: 'string',
      required: true
    },
    user_username: {
      type: 'string',
      required:true
    },
    user_password: {
      type:'string',
      required: true
    },
    user_name: {
      type:'string',
      required:true
    },
    user_lastname: {
      type:'string',
      required:true
    },
    user_birthdate:{
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

