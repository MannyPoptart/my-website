import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/Contact.css'

function Contact() {
  return (
    <div className='Contact'>

        <header id='conHeader'>
            <h1>Contact</h1>
        </header>

        <Navbar />

        <section id='contactContent'>
          
          <h1>Links</h1>
          <ul id='links'>
            <li><a href="https://www.linkedin.com/in/manuel-aguilera-46542121a/">LinkedIn</a></li>
            <li><a href="https://github.com/MannyPoptart">Github</a></li>
            <li><a href="mannya4098@gmail.com">Email</a></li>
          </ul>

        </section>

        <footer id='conFooter'>
            <p>Manny's Website &copy; 2024</p>
        </footer>

    </div>
  )
}

export default Contact