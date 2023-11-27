import React from 'react'
import Navbar from './Navbar'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect,useState } from 'react';
import Footer from './Footer';
import Loader from './Loader';
function Service() {
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
            {isloading ?(
                <Loader />
            ):(
                <div>
 <Navbar />
            <div className='contact'>
                <h1 data-aos="fade-in">Offerings.</h1>

            </div>
            <div className='page-center'>
            <div className='offers' data-aos="fade-left">
                <div className='offer1'>
                    <h2>Web design</h2>
                    <hr />
                    <img src='/assets/Web-design-service.png' className='offer' alt='image-missing' />
                    <p>Creating Web Applications and Web Designs</p>
                </div>
                <div className='offer2'>
                    <p>As a passionate web designer and developer, I possess a comprehensive skill set that combines creative design with technical expertise. Through a blend of innovative design concepts and robust coding practices, I bring web projects to life, delivering engaging and user-friendly digital experiences. </p>
                </div>
            </div>
            <div className='offers1' data-aos="fade-right" data-aos-delay="200">
                <div className='offer3'>
                    <p>In today's digital landscape, users interact with websites on an array of devices from desktop computers and laptops to smartphones and tablets I specialize in creating stunning and functional websites that adapt seamlessly across various devices and screen sizes. </p>
                </div>
                <div className='offer4'>
                    <h2>Responsive</h2>
                    <hr />
                    <img src='/assets/res.png' className='sec-offer' alt='image-missing' />
                    <p>Creating Responsive web designs</p>
                </div>
            </div>
            <div className='offers3' data-aos="fade-in"  data-aos-delay="200">
                <div className='offer1'>
                    <h2>Git/GitHub</h2>
                    <hr />
                    <img src='/assets/github.png' className='offer' alt='image-missing' />
                    <p>Git and GitHub Proficiency</p>
                </div>
                <div className='offer2'>
                    <p>As a dedicated developer, I possess a strong command of version control and collaborative coding using Git and GitHub. I've effectively managed codebases, coordinated with teams, and ensured the seamless development of various projects </p>
                </div>
            </div>
            <div className='offers4' data-aos="fade-right" data-aos-delay="200">
                <div className='offer3'>
                    <p>I prioritize code quality through meticulous development practices, emphasizing clean, maintainable code. Rigorous testing, including unit, integration, and end-to-end testing, ensures the reliability and robustness of my solutions. This commitment to quality results in software that meets the highest standards of performance and security. </p>
                </div>
                <div className='offer4'>
                    <h2>Quality</h2>
                    <hr />
                    <img src='/assets/test1.avif' className='sec-offer' alt='image-missing' />
                    <p>Code Quality and testing</p>
                </div>
            </div>
            <div className='offers5' data-aos="fade-in"  data-aos-delay="200">
                <div className='offer1'>
                    <h2>Problem Solving</h2>
                    <hr />
                    <img src='/assets/prob.png' className='offer' alt='image-missing' />
                    <p>Trouble Shooter</p>
                </div>
                <div className='offer2'>
                    <p>I excel in problem-solving by combining analytical thinking with a creative approach. With a keen eye for detail and adaptability, I navigate challenges collaboratively, ensuring effective communication and client-centric solutions. My commitment to continuous learning ensures that I stay at the forefront of technology for efficient problem resolution.</p>
                </div>
            </div>
            </div>
            <Footer />
                </div>
            )}
           
        </div>
    )
}

export default Service