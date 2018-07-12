const Schema = require('koa-mongo-odm').Schema;

const UserSchema = new Schema({
  displayName: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  }
});

module.exports = UserSchema;