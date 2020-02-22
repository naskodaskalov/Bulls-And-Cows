const PassportLocalStrategy = require('passport-local').Strategy
const usersData = require('../data/users')

module.exports = new PassportLocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, email, password, done) => {
  const user = {
    email: email.trim(),
    password: password.trim(),
    username: req.body.username.trim()
  }
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
