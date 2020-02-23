const express = require('express')
const db = require('../data/db')

const router = new express.Router()

router.get('/getallusers', (req, res) => {
  var data = []
  db.database().ref('/users').once('value', function (snap) {
    for (let i = 0; i < Object.values(snap.val()).length; i++) {
      const element = Object.values(snap.val())[i]
      const modifiedElement = {
        username: element.username,
        email: element.email,
        points: element.points
      }
      data.push(modifiedElement)
    }

    return res.status(200).json({
      success: true,
      data
    })
  })
})

module.exports = router
