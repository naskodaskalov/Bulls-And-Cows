import React from 'react'
import './App.css'
import NavBar from './Components/Common/NavBar'
import Footer from './Components/Common/Footer'
import Routes from './Configs/Routes'

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

export default App
