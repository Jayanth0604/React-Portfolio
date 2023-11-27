import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import SimpleImageSlider from "react-simple-image-slider";
import Footer from './Footer';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Loader from './Loader';
function Experience() {
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
    const images = [
        { url: "/assets/sign-in.png", className: "slide-image" },
        { url: "/assets/signup.png", className: "slide-image" },
        { url: "/assets/employee-dashboard1.png", className: "slide-image" },
        { url: "/assets/apply-leave-employee.png", className: "slide-image" },
        { url: "/assets/submit-task.png", className: "slide-image" },
        { url: "/assets/update-time-employee.png", className: "slide-image" },
        { url: "/assets/edit-profile-EM.png", className: "slide-image" },
        { url: "/assets/Calendar-EM.png", className: "slide-image" },
        { url: "/assets/Manager-Dashboard (1).png", className: "slide-image" },
        { url: "/assets/add-employee1.png" , className: "slide-image"},
        { url: "/assets/add-event-manager.png", className: "slide-image" },
        { url: "/assets/add-manager1.png", className: "slide-image" },
        { url: "/assets/employee-view.png" , className: "slide-image"},
        { url: "/assets/single-employee.png", className: "slide-image" },
        { url: "/assets/assign-task-Em.png", className: "slide-image" },

    ];
    const [isLoaded, setIsLoaded] = useState(false)
    const [sliderWidth, setSliderWidth] = useState(getSliderWidth());
    const [sliderHeight, setSliderHeight] = useState(getSliderHeight());
    useEffect(() => {
      const handleResize = () => {
        setSliderWidth(getSliderWidth());
        setSliderHeight(getSliderHeight());
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    return (
        <div>
          {isloading ?(
            <Loader />
          ):(
            <div>

<Navbar />
            <div className='experience' >
                <div className='exp-head' data-aos="zoom-out" >
                    <h1>Experience. </h1>
                    <hr />
                    <p>Full Stack Developer</p>
                    <div className='office'>
                        <h3>A2 Cloud Solution<span>Essex England UK.</span></h3>
                        <p>A2 Cloud Solutions is a global IT consulting and services provider.focus on delivering high value to clients through integrated, reliable, responsive and cost-effective solutions.</p>
                    </div>
                </div>
                <div className={`exp-img ${isLoaded ? 'fade-in' : ''}`}>
                    <div className='rounded-profile'>
                        <img src='/assets/a2-cloud.png' className='of-img' alt='image-missing' />
                    </div>
                </div>

            </div>

            <div className='Internship'>
                <hr className='home-hr' />
                <h4 className='edu-h4'>Internship</h4>

                <div className='project'>
                    <h2>Project Showcase.</h2>
                    <hr />
                    <p>Employee Time Sheet Application</p>
                </div>

                <div className='content'>
                  <div className='res-silder'>
                    <div className='slider' data-aos="fade-right">
                    <SimpleImageSlider
          width={getSliderWidth()}
          height={getSliderHeight()}
          images={images}
          showBullets={false}
          showNavs={true}
          customClass="your-slider-class"
        />

</div>
                    </div>
                    <div className='features'>
                    <div className='explain'>
                      <h2>Details</h2>
                      <hr />
                      <p>I developed the Employee Time Sheet application featuring robust User Authentication and Authorization functionalities. The system utilizes JWT tokens and bcrypt password encryption for secure access. The platform supports dual logins for managers and employees.</p>
                    </div>
                    <div className='explain1'  data-aos="fade-right" >
                      <h3>Manager Features.</h3>
                      <hr />
                      <ul>
                        <li>Add, edit, and delete employees.</li>
                        <li>Approve tasks, leave requests, and time sheets submitted by employees.</li>
                      </ul>

                      <div >
                      <h3>Additional Features.</h3>
                      <hr />
                      <ul>
                        <li>Managers can assign tasks and teams to employees.</li>
                        <li>Email notifications for managers regarding new/pending leave requests and submitted tasks.</li>
                        <li>Login Status Indicator for Employees</li>
                        <li>Address Fetching Option in adding address.</li>
                        <li>Event Management and Calendar Integration</li>
                      </ul>
                    </div>
                    </div>

                    <div className='explain1'  data-aos="zoom-in"  >
                      <h3>Employee Features.</h3>
                      <hr />
                      <ul>
                        <li>Login and logout options with status indicator.</li>
                        <li>Record and submit working hours to manager.</li>
                        <li>Edit and submit time sheets with acceptable reason</li>
                        <li>View leave and task history.</li>
                      </ul>
                      <div>
                        <div className='rounded-profile1'>
                         <img src='/assets/vs.avif' className='vs-code' alt='image -missing' />    
                         </div>
                      </div>
                    </div>


                    </div>
                </div>
            </div>
            <Footer />
            </div>
          )}
           
        </div>
    )
}

export default Experience

function getSliderWidth() {
  // You can adjust the values based on your design
  return window.innerWidth > 768 ? 900 : window.innerWidth * 0.9;
}

// Function to determine the height of the slider based on the screen size
function getSliderHeight() {
  // You can adjust the values based on your design
  return window.innerWidth > 768 ? 500 : window.innerWidth * 0.5;
}