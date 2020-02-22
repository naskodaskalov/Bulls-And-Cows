const jwt = require('jsonwebtoken')
const usersData = require('../data/users')
const PassportLocalStrategy = require('passport-local').Strategy

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

    const isMatch = savedUser.password === user.password

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
      name: savedUser.name
    }

    return done(null, token, data)
  })
})
