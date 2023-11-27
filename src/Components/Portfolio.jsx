import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer';
import Loader from './Loader';
import Aos from 'aos';
import 'aos/dist/aos.css';
function Portfolio() {
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
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);
    return (
        <div>
            {isloading ?(
                <Loader />
            ):(
                <div>
                     <Navbar />
            <div className='portfolio'>
                <div className='portfoio-l' data-aos="zoom-in" >
                    <h1>Portfolio.</h1>
                    <p>Check out some of my latest Projects.</p>
                    <p className='p-length'>
                        I've worked at start-ups on a range of different projects, including design systems, websites and apps.
                    </p>
                </div>
                <div className={`portfolio-r ${isLoaded ? 'fade-in' : ''}`}>
                    <div className='port-img1'>
                        <img src='/assets/port1.png' alt='imagemissing' className='port1' />
                    </div>
                    <div className='port-img2'>
                        <img src='/assets/port2.png' alt='imagemissing' className='port2' />
                    </div>
                </div>

                <div className='webites'>
                    <hr className='home-hr' />
                    <h4 className='edu-h4'>Website's</h4>
                    <div className='site'>
                        <a href="https://singular-cendol-d48f15.netlify.app/"><img src='/assets/Gusto-Site.png' className='webite' alt='image-missing' data-aos="zoom-in" data-aos-delay="200" /></a>
                        <p>"This website was created using HTML. I utilized a considerable amount of CSS to implement various styling properties. Despite being my first website, I made sure it is also responsive."<span><a href="https://singular-cendol-d48f15.netlify.app/">view site</a></span></p>
                    </div>
                </div>
                <div className='webites'>
                    <hr className='home-hr' />

                    <div className='site'>
                        <a href="https://reliable-kulfi-4c6035.netlify.app/"><img src='/assets/Evenly-Site.png' className='webite' alt='image-missing' data-aos="zoom-in" data-aos-delay="200"/></a>
                        <p>"This website was created using HTML and CSS. I applied a substantial amount of CSS knowledge to comprehend its properties. Although it was my initial project, I ensured it is responsive. The website is a static shopping site designed to gain insight into e-commerce site development."<span><a href="https://reliable-kulfi-4c6035.netlify.app/">view site</a></span></p>
                    </div>
                </div>
                <div className='webites'>
                    <hr className='home-hr' />

                    <div className='site'>
                        <a href="https://startling-valkyrie-56f106.netlify.app/"><img src='/assets/Cafe-Site.png' className='webite' alt='image-missing' data-aos="zoom-in" data-aos-delay="200"/></a>
                        <p>"This website was created using HTML. I utilized a considerable amount of CSS to implement various styling properties. Despite being my first website, I made sure it is also responsive."<span><a href="https://startling-valkyrie-56f106.netlify.app/">view site</a></span></p>
                    </div>
                </div>
                <div className='webites'>
                    <hr className='home-hr' />

                    <div className='site'>
                        <a href="https://apollo-appointments.vercel.app/"><img src='/assets/Apollo-Site.png' className='webite' alt='image-missing' data-aos="zoom-in" data-aos-delay="200"/></a>
                        <p>"This website was built using React.js. It is a static site cloned from Apollo Appointment, containing relevant information within the medical category."<span><a href="https://apollo-appointments.vercel.app/">view site</a></span></p>
                    </div>
                </div>
                <div className='webites'>
                    <hr className='home-hr' />

                    <div className='site'>
                        <a href="https://max-black.vercel.app/"><img src='/assets/Max-Site.png' className='webite' alt='image-missing'data-aos="zoom-in" data-aos-delay="200" /></a>
                        <p>"This project is implemented using React.js, incorporating Redux for state management. It's a responsive shopping site where users can add products to their cart and remove them. Props are utilized to fetch and display data in the application." <span><a href="https://max-black.vercel.app/">view site</a></span></p>
                    </div>
                </div>
                <div className='webites'>
                    <hr className='home-hr' />

                    <div className='site'>
                        <a href="https://amazon-apple.vercel.app/"><img src='/assets/Apple-site.png' className='webite' alt='image-missing'data-aos="zoom-in" data-aos-delay="200" /></a>
                        <p>"This project is implemented using React.js, incorporating Redux for state management. It's a responsive shopping site where users can add products to their cart and remove them. Props are utilized to fetch and display data in the application. Additionally, the page includes a sign-in form and an 'Add Items' page, allowing users to contribute items to the site."<span><a href="https://amazon-apple.vercel.app/">view site</a></span></p>
                    </div>
                </div>
            </div>
            <Footer />
                </div>
            )}
           
        </div>
    )
}

export default Portfolio