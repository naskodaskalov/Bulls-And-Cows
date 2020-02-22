const db = require('./db')

module.exports = {
  save: (user) => {
    return new Promise(resolve => {
      user.points = 0

      db
        .database()
        .ref('/users/')
        .push(user)
      resolve({})
    })
  },
  findByEmail: (email) => {
    return new Promise((resolve) => {
      resolve(fetch('https://bullsandcowsdb.firebaseio.com/users/.json').then(data => data.json()).then((data) => {
        if (data != null) {
          for (let i = 0; i < Object.values(data).length; i++) {
            if (Object.values(data)[i].email === email) {
              return Object.values(data)[i]
            }
          }
        }
      }))
    })
  },
  findById: (id) => {
    return usersById[id]
  },
  updatePoints: (userData) => {
    let id = ''
    let currentPoints = 0
    db
      .database()
      .ref('/users/').orderByChild('email').equalTo(userData.email).once('value').then(function (snapshot) {
        id = Object.keys(snapshot.val())[0]
        currentPoints = Object.values(snapshot.val())[0].points
      }).then(() => {
        userData.points = parseInt(currentPoints) + parseInt(userData.points)
        db
          .database()
          .ref('/users/' + id).update(userData)
      })
  }
}
