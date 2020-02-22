const jwt = require('jsonwebtoken')
const usersData = require('../data/users')

module.exports = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).end()
  }

  const token = req.headers.authorization.split(' ')[1]

  return jwt.verify(token, 'bu11$ @nd c0w$', (err, decoded) => {
    if (err) { return res.status(401).end() }

    const userId = decoded.sub

    const user = usersData.findById(userId)
    if (!user) {
      return res.status(401).end()
    }

    req.user = user

    return next()
  })
}
