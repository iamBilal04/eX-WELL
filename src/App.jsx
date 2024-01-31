import { BrowserRouter } from 'react-router-dom'
import { useState } from 'react'
import { About, Hero, Navbar, Contact } from './components'
import Working from './components/Working'
import Ai from './components/Ai'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <About />
      <Working />
      <Contact />
      <Ai />
    </BrowserRouter>
  )
}

export default App
