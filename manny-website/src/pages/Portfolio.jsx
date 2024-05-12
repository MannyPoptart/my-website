import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/Portfolio.css'

function Portfolio() {
  return (
    <div className='Portfolio'>

      <header id="portHeader">
        <h1>Portfolio</h1>
      </header>

      <Navbar />


      <section id='portContent'>

        <h2>Projects</h2>
      
      </section>



      <footer id='portFooter'>
        <p>Manny's Website &copy; 2024</p>
      </footer>
        
    </div>
  )
}

export default Portfolio