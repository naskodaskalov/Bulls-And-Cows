const express = require('express')
const passport = require('passport')
const validator = require('validator')

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
