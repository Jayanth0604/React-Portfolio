import React from 'react'
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div>
      <div className='footer'>
        <div className='footer-bar'>
          <img src='/assets/footer-bar.png' className='bar-foot' alt='image missing' />
        </div>
        <div className="footer-end">
          <div className='foooter-end1'>
            <p> &copy; 2023 Jayanth Kumar</p>
          </div>
          <div className='foooter-end2'>
            <ul>
              <li><Link to="https://www.instagram.com/jayanth._06/"><FaInstagram className='social' /></Link></li>
              <li><Link to="https://www.linkedin.com/in/jayanth-kumar-s-a43b07262/"><FaLinkedin className='social' /></Link></li>
              <li><Link to="https://github.com/Jayanth0604"><FaGithub className='social' /></Link></li> 
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer