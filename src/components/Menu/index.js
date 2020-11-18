import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import ImgLogo from '../../assets/Bixarada.png';


export default function Menu() {
  let [show, setShow] = useState(true)
  
  function toogle(){
    
    const menuSection = document.querySelector(".menu-section");
    const menuToggle = menuSection.querySelector(".menu-toggle");
    
    menuToggle.addEventListener("click",async () => {
    
         document.body.style.overflow = show ? "hidden" : "initial"
    
        menuSection.classList.toggle("on", show)
        setShow(show = !show) ;
        
    })
  }


  
  return (
    <header className="menu">
    <div className="ContainerHeader">
      <div className="Logo">
        <img src={ImgLogo} alt="Bixarada" />
        
      </div>
      <div className="menu-section">
        <div className="menu-toggle" onClick={toogle}>
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
        </div>
        <nav>
          <ul>
            <li>
              <Link className="Link" to="/">Home</Link>
            </li>
            <li>
              <Link className="Link" to="/registerUser">Seja um apoiador</Link>
            </li>
            <li>
              <Link className="Link" to="/incidents">Explorar</Link>
            </li>
            <li>
              <Link className="Link" to="/Logon">Login</Link>
            </li>
            


          </ul>
        </nav>
      </div>
    </div>
  </header>

   
  );
}