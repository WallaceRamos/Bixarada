import React from 'react';
import { Link } from 'react-router-dom';
import { FiFacebook, FiInstagram, FiMail } from 'react-icons/fi';



import './styles.css';


import ImgLogo from '../../assets/logoTexto.png';
export default function Footer() {
 


  
  return (
    <footer className="footer">
        <div className="footer-left">
          <img src={ImgLogo} alt="Bixarada" />
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been</p>

          <div className="social">
            <a href=""><FiFacebook size={20} color="#e7f2f4" /></a>
            <a href=""><FiInstagram size={20} color="#e7f2f4" /></a>
            <a href=""><FiMail size={20} color="#e7f2f4" /></a>

          </div>
        </div>
        <ul className="footer-right">
          <li className="features">
            <h2>Informações</h2>
            <ul className="box">
              <li><a href="">Como Funciona</a></li>
              <li><a href="">Taxas</a></li>
              <li><a href="">Politica de Privacidade</a></li>
              <li><a href="">Termos e Condições</a></li>
              
            </ul>
          </li>
          <li className="features">
            <h2>Linkis</h2>
            <ul className="box">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/registerUser">Seja um Apoiador</Link></li>
              <li><Link to="/incidents">Explorar</Link></li>
              <li><Link to="/Logon">Login</Link></li>
             
            </ul>
          </li>

          <li className="features">
            <h2>Endereço</h2>
            <ul className="box">
              <li><a>Av. Prof. João Rodrigues</a></li>
              <li><a>1501 - Jardim Esperanca</a></li>
              <li><a>Guaratinguetá</a></li>
              <li><a>São Paulo</a></li>
              
            </ul>
          </li>
        </ul>
        <div className="footer-bottom">
          <p>Copyright &copy; By Wallace Ramos 2020</p>
        </div>
      </footer>

   
  );
}