import React, {useState} from 'react';
import logo from '../logo.svg';
import './SideNav.css'
import { FaHome, FaGlobeAmericas, FaBed } from 'react-icons/fa';
import { Redirect, Link } from "react-router-dom";

const SideNav = (props) => {
    const [isToMap, setIsToMap] = useState(false);
    const [isToHome, setIsToHome] = useState(false);
    const [IsToBedSettings, setIsToBedSettings] = useState(false);

    const redirectTo = (comp) => {
        setIsToMap(false);
        setIsToHome(false);
        setIsToBedSettings(false);

        switch(comp) {
            case "map":
                setIsToMap(true);
                break;
            case "home":
                setIsToHome(true);
                break;
            case "bed":
                setIsToBedSettings(true);
                break;
            default:
                break;
        }
    }

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
            <div className='button' onClick={() => redirectTo("map")}>
                {isToMap && <Redirect to='/overview' />}
                <FaGlobeAmericas size={50}/>
            </div>
            <div className='button' onClick={() => redirectTo("bed")}>
                 {IsToBedSettings && <Redirect to='/bedcounter' />}
                <FaBed size={50}/>
            </div>
        </div>
    );
}

export default SideNav