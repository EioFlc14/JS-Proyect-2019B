/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    user_code: {
      type: 'number',
      required:true
    },
    user_identifcator: {
      type: 'string',
      required: true
    },
    user_login: {
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
    }
  },

};

