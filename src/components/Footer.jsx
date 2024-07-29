import React from 'react'
import './footer.css'

function Footer() {
  return (
    <footer id='footer' className='footer'>
        <div className="copyright">
            &copy; Copyright{''}
            <strong>
                <span> Software Developer</span>
            </strong>
            . All RightsReserved
        </div>
        <div className="credits">
            Designed by <a href='#'>E.Sigei</a>
        </div>
    </footer>
  );
}

export default Footer