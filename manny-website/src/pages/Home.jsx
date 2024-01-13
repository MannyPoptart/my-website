import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/Home.css'

function Home() {
  return (
    <div className='Home'>

        <header id='homeHeader'>
            <h1>Home</h1>
        </header>

        <Navbar />

        <section id='content'>
            <p>Welcome to my website! Here is my favorite pokemon: Maushold</p>

            <img src="https://media3.giphy.com/media/eTQSTvcPIRWi8YhC9C/giphy.gif?cid=6c09b952kr2ufogef2slrjgm43vj7n0cqzecx2rgbxlizei5&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s" alt="Sugar Glider" />




        </section>

        <footer id='homeFooter'>
            <p>Manny's Website &copy; 2024</p>
        </footer>

    
    </div>
  )
}

export default Home