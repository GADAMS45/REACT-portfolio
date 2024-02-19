import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'
import Resume from './components/Resume'

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
      <main>
          {renderCurrentPage()}
      </main>
    </>
  )
}

export default App
