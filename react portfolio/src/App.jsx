import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'
import Resume from './components/Resume'

function App() {

  return (
    <>
      <Header />
      <main>
          <About/>
          <Work/>
          <Contact />
          <Resume />

      </main>
    </>
  )
}

export default App
