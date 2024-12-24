import React from 'react'
import vg from '../assets/2.webp'
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from 'react-icons/ai'

const Home = () => {
  return (
   <>
     <div className='home' id='home'>
        <main>
            <h1>TechStar</h1>
            <p>Solution to all your Problems</p>
        </main>
    </div>
    <div className='home2' id='about'>
        <img src={vg} alt="" />

        <div>
            <p> We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.</p>
        </div>
    </div>

    <div className='home3'>
        <div>
            <h1>Who we are ? </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dolorum eos dolores numquam tempore, dolore suscipit aspernatur quos nulla at officia cum accusantium ea, maiores harum aut quo et. Dolore.
            Aut, quidem, tempora perferendis culpa ducimus explicabo ut delectus incidunt dicta quam minima libero eum sequi laborum blanditiis adipisci ullam, doloribus eius omnis molestiae id odit sunt totam reiciendis. Dolores.
            Aliquam vero laborum corrupti aut distinctio veniam est. Dolorum architecto dicta laboriosam cumque quae obcaecati necessitatibus totam, quam dolore laborum sed nostrum exercitationem odio autem nemo nulla iure tempora quis.
            Iste magnam laborum earum aut quisquam soluta beatae facere? Atque assumenda, quisquam consequatur quae quidem accusantium? Soluta odio sequi, sint quo nesciunt, voluptatem in adipisci veniam assumenda maiores illum consectetur.
            Harum quis libero ipsam, itaque nihil assumenda fuga perferendis inventore tempora molestiae omnis consequuntur similique vel soluta doloremque pariatur modi ab fugit accusamus aliquam asperiores culpa delectus distinctio atque! Similique!</p>
        </div>
    </div>

    <div className='home4' id='brands'>
        <div>
            <h1>Brands</h1>

            <article>
                <div style={{
                    animationDelay:"0.3s",
                }}>
                    <AiFillGoogleCircle/>
                    <p>Google</p> 
                </div>   
                <div style={{
                    animationDelay:"0.5s",
                }}>
                    <AiFillAmazonCircle/>
                    <p>Amazon</p> 
                </div>    
                <div style={{
                    animationDelay:"0.7s",
                }}>
                    <AiFillYoutube/>
                    <p>Youtube</p> 
                </div>   
                <div style={{
                    animationDelay:"0.7s",
                }}>
                    <AiFillInstagram/>
                    <p>Instagram</p> 
                </div>             
            </article>
        </div>
    </div>
   </>
  )
}

export default Home