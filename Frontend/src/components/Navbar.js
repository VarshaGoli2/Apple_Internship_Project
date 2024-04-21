import React,{useState,useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import {Button}from './Button';
import './Navbar.css'
function Navbar() {
    const [click,setClick]=useState(false);
    const [button,setButton]=useState(true)
    const handleClick=()=> setClick(!click);
    const closeMobileMenu= ()=>setClick(false);
    const showButton=()=>{
        if(window.innerWidth<=960){
            setButton(false)
        }
        else{
            setButton(true)
        }
    }
    useEffect(()=>{
        showButton();
    },[]);
    window.addEventListener('resize',showButton)
  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
            <NavLink to="/" className="navbar-logo" onClick={closeMobileMenu}>
                Report Incidents <i className="fa fa-car"></i>
            </NavLink>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times':'fas fa-bars'}></i>
            </div>
            <ul className={click ? 'nav-menu active':'nav-menu'}>
                <li className='nav-item'>
                    <NavLink to='/Home' className='nav-links' onClick={closeMobileMenu}>About</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to='/' className='nav-links' onClick={closeMobileMenu}>Report</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to='/view' className='nav-links' onClick={closeMobileMenu}>View</NavLink>
                </li>
                <li>
                    <NavLink to='/user' className='nav-links-mobile' onClick={closeMobileMenu}>User</NavLink>
                </li>
            </ul>
            {button && <Button buttonStyle='btn--outline' onClick={closeMobileMenu}>User</Button>}
            </div>
        </nav>
    </>
  )
}

export default Navbar
