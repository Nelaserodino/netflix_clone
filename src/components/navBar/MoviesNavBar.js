import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './MoviesNavBar.scss';
import { UserAuth } from '../../context/AuthContext'


export const MoviesNavBar = () => {
  const {user, logOut} = UserAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [show, setShow] = useState(false)
  const navigate = useNavigate();
  
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null());
  }

  const handleLogOut = async () => {
    try{
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className='containerNav'>
        <div className='left'>
          <Link to='/'>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
              alt=''/>
          </Link>
        </div>
        {user?.email ?(
          <div className='right'>
            <Link to='/account'>
                <img 
                  src='../images/profile_girl.jpg' 
                  />
              </Link>
          <button 
            onClick={handleLogOut} 
            className='sign-up text-white'
            >
            Log Out
          </button>
        </div>
        ) : (
          <div className='right'>
          <Link to='/login'>
            <button className='sign-in text-white'>Sign In</button>
          </Link>
          <Link to='/signup'>
            <button className='sign-up text-white'>Sign Up</button>
          </Link>
        </div>
        )}
      </div>
    </div>
  )
}
