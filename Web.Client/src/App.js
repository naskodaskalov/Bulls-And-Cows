import React from 'react'
import NavBar from './Components/Common/NavBar'
import Footer from './Components/Common/Footer'
import Routes from './Utilities/Routes'

import './App.css'
import './MediaQueries.css'

import { withRouter } from 'react-router-dom'

function App () {
  return (
    <div className='App container-fluid'>
      <header className='wrapper'>
        <NavBar />
      </header>
      <main className='container'>
        <Routes />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default withRouter(App)
