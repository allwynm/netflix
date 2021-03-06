import React, { useEffect, useState } from 'react';
import './Nav.css';

function Nav() {
  const [show, handleShow] = useState();
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });

    return () => {
      window.removeEventListener('scroll');
    };
  }, []);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <img
        className='nav__logo'
        src='https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png'
        alt='logo'
      />

      <img
        className='nav_avatar'
        src='https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png'
        alt='avatar'
      />
    </div>
  );
}

export default Nav;
