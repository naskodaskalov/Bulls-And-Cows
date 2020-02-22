const jwt = require('jsonwebtoken')
const usersData = require('../data/users')
const PassportLocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')

module.exports = new PassportLocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, email, password, done) => {
  const user = {
    username: email.trim(),
    password: password.trim()
  }
  var savedUser

  usersData.findByEmail(email).then(res => {
    if (res) {
      savedUser = res
    }

    if (!savedUser) {
      const error = new Error('Incorrect email or password')
      error.name = 'IncorrectCredentialsError'

      return done(error)
    }
    let isMatch = ''
    bcrypt.compare(user.password, savedUser.password).then(function (result) {
      isMatch = result
    }).then(() => {
      if (!isMatch) {
        const error = new Error('Incorrect email or password')
        error.name = 'IncorrectCredentialsError'

        return done(error)
      }

      const payload = {
        sub: savedUser.id
      }

      // create a token string
      const token = jwt.sign(payload, 'bu11$ @nd c0w$')
      const data = {
        name: savedUser.username,
        email: savedUser.email
      }

      return done(null, token, data)
    }

    )
  })
})
