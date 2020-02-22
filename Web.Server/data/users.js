const db = require('./db')

const usersById = {}
const usersByEmail = {}

module.exports = {
  total: () => Object.keys(usersById).length,
  save: (user) => {
    return new Promise(resolve => {
      const id = Object.keys(usersById).length + 1
      user.id = id
      user.points = 0

      db
        .database()
        .ref('/users/')
        .push(user)
      resolve('ready')
    })
  },
  findByEmail: (email) => {
    return new Promise((resolve) => {
      resolve(fetch('https://bullsandcowsdb.firebaseio.com/users/.json').then(data => data.json()).then((data) => {
        for (let i = 0; i < Object.values(data).length; i++) {
          if (Object.values(data)[i].email === email) {
            return Object.values(data)[i]
          }
        }
      }))
    })
  },
  findById: (id) => {
    return usersById[id]
  }
}
