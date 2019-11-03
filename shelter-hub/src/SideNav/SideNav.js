import React from 'react';
import logo from '../logo.svg';
import './SideNav.css'
import { FaHome, FaGlobeAmericas, FaBed } from 'react-icons/fa';

const SideNav = (props) => {
  return (
        <div className='sideNav'>
            <div className='logo'>
                <img 
                    src={logo} 
                    style={{
                        width: '100%', 
                        height: '10%', 
                        position: 'relative'
                    }}
                    alt="logo" 
                />
            </div>
            <div className='button'>
                <div><FaHome size={50}/></div>
            </div>
            <div className='button'>
                <FaGlobeAmericas size={50}/>
            </div>
            <div className='button'>
                <FaBed size={50}/>
            </div>
        </div>
  );
}

export default SideNav