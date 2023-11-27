import React, { useEffect , useState} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link, useSearchParams } from 'react-router-dom'
import Aos from 'aos';
import 'aos/dist/aos.css';
import Loader from './Loader';
function Home() {

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
        Aos.init({duration:1500})
    },[])
    return (
        <div>
            {
                isloading?(
                    <Loader />
                ):(
                    <div>
                                    <Navbar />
 <div className='Home-head' data-aos="fade-right">
                <img src="/assets/back-ground.png" className='head-img' alt='image-missing' />
            </div>

            <div className='home-body ' data-aos="zoom-in">
                <div className='border-body' >
                    <h3>Hi, I'm  <span>Jayanth Kumar S.</span>Nice to meet you.</h3>
                    <p>Since beginning my journey as a Full Stack Developer, I've done remote work for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.</p>
                </div>
                {/* <img src='/assets/home-body.png' className='home-body-img' alt='image-missing' /> */}
            </div>
            <div className='about'>
            <hr className='home-hr'/>
            <h4 className='edu-h4'>About</h4>
            <div className='about-l'>
            <div className='rounded-profile'  data-aos="zoom-out"  data-aos-delay="300">
              <img src='/assets/me1.png' className='myself' alt='profile' />
                </div>
                <div className='profile-ri'>
                    <h1>About.</h1>
                    <p>I'm a Full Stack Developer based in Chennai, India.</p>
                    </div>
                    </div>
                    <div className='about-content' data-aos="zoom-in"  data-aos-delay="300">
                    <p >
                    "I am proficient in both front-end and back-end development. For front-end, I leverage the <span>React</span>. library to create dynamic and interactive user interfaces. On the back end, I utilize <span>SQL</span> databases and employ js<span>Node.</span>to seamlessly connect the front and back ends. Additionally, I have extensive experience working with APIs and possess a solid understanding of <span>UX/UI principles</span>. My skills extend to crafting visually appealing <span>CSS</span> with animations to enhance user experience. Over the course of numerous projects, I've demonstrated my proficiency, and I am also familiar with Bootstrap. For a deeper dive into my projects, you can explore more by <Link to="/Portfolio">clicking here.</Link>"
                    </p>
                </div>
            </div>
            <div className='education' >
            <hr className='home-hr'/>
            <h4 className='edu-h4'>Education</h4>
                <div className='education-l'data-aos="fade-right"  data-aos-delay="200">
                <div className='border'>
                <img  src='/assets/clg1.png' alt='imagemissing' className='clg-img'/>
                <h4><a href="https://www.presidencycollegechennai.ac.in">Presidency College Chennai</a></h4>
                <p>2019-2022</p>
                <p>Bsc Phy (CGPA-7.8)</p>
                </div>
                </div>
                <div className='education-lR' data-aos="zoom-out"  data-aos-delay="600">
                <div className='border'>
                <img  src='/assets/presidency.png' alt='imagemissing' className='clg-img'/>
                <h4><a href="https://www.unom.ac.in/">University of Madras</a></h4>
                <p>2023-2025(Pursuing)</p>
                <p>MBA (System Management)</p>
                </div>
                </div>
            </div>
            <div className='skills'>
            <hr className='home-hr'/>
            <h4 className='edu-h4'>Skills</h4>
            <div className='flex-skill'>
             <div className='front-end' data-aos="fade-right"  data-aos-delay="600">
               <h2>Front End</h2>
               <ul className='skills-ul'>
                <li className='skills-li'>HTML</li>
                <li className='skills-li'>CSS</li>
                <li className='skills-li'>JAVASCRIPT</li>
                <li className='skills-li'>BOOTSTRAP</li>
                <li className='skills-li'>REACT.JS</li>
                <li className='skills-li'>UX/UI</li>
               </ul>
             </div>
             <div  className='pie-chart' data-aos="zoom-in"  data-aos-delay="600">
                <div className='rounded-pie' >
             <img src='/assets/pie-chart.png' className='pie' alt='chart-missing' />
             </div>
             </div>
             <div className='back-end' data-aos="zoom-out"  data-aos-delay="600">
               <h2>Back End</h2>
               <ul className='skills-ul'>
                <li className='skills-li'>NODE.JS</li>
                <li className='skills-li'>SQL</li>
                <li className='skills-li'>DJANGO</li>
                <li className='skills-li'>PYTHON (BASICS)</li>
                <li className='skills-li'>JAVA (BASICS)</li>
               </ul>
             </div>
             </div>
            </div>
            <Footer />
                    </div>
                )
            }


           

 

        </div>
    )
}

export default Home