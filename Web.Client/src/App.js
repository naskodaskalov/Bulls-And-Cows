import React from 'react'
import './App.css'
import NavBar from './Components/Common/NavBar'
import Footer from './Components/Common/Footer'
import Routes from './Utilities/Routes'

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
      <footer className='p-3'>
        <Footer />
      </footer>
    </div>
  )
}

export default withRouter(App)
