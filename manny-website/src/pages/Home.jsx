import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/Home.css'

function Home() {
  return (
    <div className='Home'>

        <div id='snow'></div>

        <header id='homeHeader'>
            <h1>Home</h1>
        </header>

        <Navbar />

        <section id='content'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis maiores vero optio ex quasi ipsum. Saepe, rem, eligendi ullam nesciunt illo, laudantium necessitatibus perferendis id nostrum similique repellendus molestias repellat.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti facilis quidem distinctio modi nam, necessitatibus magnam placeat officiis rerum totam asperiores cupiditate eligendi? Et quasi quas corporis molestiae repellat inventore.
              Lorem ipsum dolor si amet consecte adipisicing elit. Quisquam, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad porro blanditiis quae ducimus non maxime quisquam illum dolorem consequuntur iure sint quos harum, facere in error modi fugiat delectus ipsum?
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique error explicabo reiciendis, hic nemo laudantium dignissimos? Debitis, ea autem. Et ratione amet facere dolore earum mollitia libero nobis animi labore!
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, fugiat! Quae, repellendus eveniet sit itaque cum delectus porro nemo vero quibusdam odit atque, rerum quisquam enim fugit nostrum quos sunt?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsam qui sint, laborum atque maxime facere nisi laudantium itaque consectetur, repudiandae ab ipsa nobis! Aspernatur architecto recusandae sint assumenda et!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, maiores. Blanditiis iusto velit error quia officia tempora rerum, quis quam, deserunt placeat, provident iure dolorum distinctio? Aperiam exercitationem natus officiis.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere iure iste, delectus quaerat reiciendis deserunt rerum rem voluptatum, ad minus nulla, similique natus necessitatibus quod nihil aliquid! Nam, amet quaerat?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor inventore error sequi deleniti ipsa nam, totam doloribus ducimus quisquam velit tenetur iste voluptate. Cum repudiandae corporis repellat accusantium voluptatem aspernatur!
            </p>
        </section>

        <footer id='homeFooter'>
            <p>Manny's Portfolio &copy; 2024</p>
        </footer>

        <script src="../scripts/snow.js"></script>
        <script src="../scripts/particles.min.js"></script>

    
    </div>
  )
}

export default Home