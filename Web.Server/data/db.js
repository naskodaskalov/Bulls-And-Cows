
const firebase = require('firebase')

var firebaseConfig = {
  apiKey: 'AIzaSyBL9o_q5aUOY6mo7hZhFF39fYvwReyVwrw',
  authDomain: 'bullsandcowsdb.firebaseapp.com',
  databaseURL: 'https://bullsandcowsdb.firebaseio.com',
  projectId: 'bullsandcowsdb',
  storageBucket: 'bullsandcowsdb.appspot.com',
  messagingSenderId: '499546762740',
  appId: '1:499546762740:web:fb387ce1534eeb9c19dda1',
  measurementId: 'G-9LTFTCKKLP'
}

module.exports = firebase.initializeApp(firebaseConfig)
