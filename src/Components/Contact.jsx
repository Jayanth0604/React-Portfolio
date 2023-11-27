import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from './Loader';
function Contact() {
    const [isloading , setIsLoading] = useState(true);

 useEffect(()=>{
    const loadingTimeout = setTimeout(()=>{
        setIsLoading(false)
    },1500);

    return()=>{
        clearTimeout(loadingTimeout)
    }
 })
    useEffect(()=>{
        Aos.init({duration:2000});
      },[])
    return (
        <div>
            {isloading ?
        (
            <Loader />
        ):(
            <div>
 <Navbar />
            <div className='social' data-aos="fade-in">
                <div className='social-t'>
                    <div className='x'>
                        <Link to="https://twitter.com/Jayanth0604"><img src='/assets/x.png' className='social-img' alt='image-missing' /></Link>
                    </div>
                    <div className='fb'>
                      <Link to="https://www.facebook.com/jayanth.kumar.7355079/">  <img src='/assets/fb.png' className='social-img' alt='image-missing' /></Link>
                    </div>
                </div>
                <div className='social-b'>

                    <div className='social-b'>
                        <div className='in'>
                          <Link to="https://www.linkedin.com/in/jayanth-kumar-s-a43b07262/">  <img src='/assets/in.png' className='social-img' alt='image-missing' /></Link>
                        </div>
                        <div className='insta'>
                           <Link to="https://www.instagram.com/jayanth._06/"><img src='/assets/insta.png' className='social-img' alt='image-missing' /></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='email' data-aos="fade-right">
            <form action="https://formspree.io/f/xqkvvqlw" method="POST">
  <div className="mail-L">
    <h2>Send Email.</h2>
    <hr />
    <label>Name</label>
    <input name="name" required />

    <label>Email</label>
    <input name="email" required />
  </div>
  <div className="mail-R">
    <label>Message</label>
    <textarea name="message" required />

    <button type="submit">Send email</button>
  </div>
</form>

            </div>
            <Footer />
            </div>
        )    
        }
           
        </div>
    )
}

export default Contact

// 25613760/