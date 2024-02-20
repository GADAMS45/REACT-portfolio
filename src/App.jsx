import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'
import Resume from './components/Resume'
import Footer from './components/Footer'

function App() {

  // let currentPage = "About";
  const [currentPage, setCurrentPage] = useState('About')

  function renderCurrentPage () {
    if(currentPage == "About") {
      return <About />
    }
    if(currentPage == "Work") {
      return <Work />
    }
    if(currentPage == "Contact") {
      return <Contact />
    }
    if(currentPage == "Resume") {
      return <Resume />
    }

  }

  return (
    <>
      <Header setCurrentPage={setCurrentPage}/>
      <main id="main-container">
          {renderCurrentPage()}
      </main>
      <Footer />
    </>
  )
}

export default App
