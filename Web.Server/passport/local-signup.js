const PassportLocalStrategy = require('passport-local').Strategy
const usersData = require('../data/users')
const bcrypt = require('bcrypt')
const saltRounds = 10

module.exports = new PassportLocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, email, password, done) => {
  let user = {}
  bcrypt.hash(password.trim(), saltRounds).then(function (hash) {
    user = {
      email: email.trim(),
      password: hash,
      username: req.body.username.trim()
    }
  })

  usersData.findByEmail(email).then(data => {
    if (data) {
      return done('E-mail already exists!')
    } else {
      usersData.save(user).then(res => {
        if (res) {
          return done(null)
        }
      })
    }
  })
})
