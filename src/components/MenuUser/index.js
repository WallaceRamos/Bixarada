import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import ImgLogo from '../../assets/logo50px.png';
import Imgdestaque from '../../assets/heroes.svg';



export default function MenuUser() {
  const UserName = localStorage.getItem('UserName')
  const UserImage = localStorage.getItem('UserImage')

  return (
    <header className="menuUser-Container">
      <div className="content">
        <nav>
          <img src={ImgLogo} alt="Bixarada" />
          <Link to="/profileUser">Explorar</Link>
        </nav>

        <aside>
          <div className="profile">
            <div>
              <strong>{UserName}</strong>
              <Link to="/profileUser">meu perfil</Link>
            </div>
            <img src={UserImage} alt={UserName} />
          </div>
        </aside>
      </div>
    </header>


  );
}