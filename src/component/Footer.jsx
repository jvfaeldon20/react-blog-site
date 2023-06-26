import React from 'react'
import '../assets/css/footer.css'

function Footer() {
  return (
    <footer className='footer'>
        <div className='footer-container'>
            <p>React Blogsite by <span className='footer-mail'>@jvfaeldon</span>. All rights reserved.</p>
            <ul className="footer-menu">
              <li className="footer-item">
                <a href="/blogs">Home</a>
              </li>
              <li className="footer-item">
                <a href="/blogs">Blogs</a>
              </li>
              <li className="footer-item">
                <a href="/contact-me">Contact Me</a>
              </li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer