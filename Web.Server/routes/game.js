const express = require('express')

const router = new express.Router()

router.get('/getallusers', (req, res) => {
  return new Promise((resolve) => {
    resolve(fetch('https://bullsandcowsdb.firebaseio.com/users/.json').then(data => data.json()).then((data) => {
      return res.json({
        success: true,
        data
      })
    }))
  })
})

module.exports = router
