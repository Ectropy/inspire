var bcrypt = require('bcrypt-nodejs')
var mongoose = require('mongoose')
var Schema = mongoose.Schema
var userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true
  },
  password: String
})

userSchema.pre('save', function (next) {
  var user = this
  bcrypt.genSalt(10, function (err, salt) {
    if (err) {
      return next(err)
    }

    // Accepts user password, salt, and variable used for progress if desired (null because we don't care about progress)
    bcrypt.hash(user.password, salt, null, function (err, hash) {
      if (err) {
        return next(err)
      }
      user.password = hash
      next()
    })
  })
})

userSchema.methods.comparePassword = function (canidatePassword, callback) {
  // this.password is our hashed and salted password

  bcrypt.compare(canidatePassword, this.password, function (err, isMatch) {
    // if there was an error, return the callback with the error
    if (err) {
      return callback(err)
    }
    // otherwise call the callback
    callback(null, isMatch)
  })
}

var model = mongoose.model('user', userSchema)
module.exports = model
