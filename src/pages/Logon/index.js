import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import { toast } from 'react-toastify';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.svg';

export default function Logon() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

toast.configure();
  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('auth', {
        email, 
        password
       })

       const { status, name, _id, userImage_url} = response.data;  
      localStorage.setItem('UserName', name)
      localStorage.setItem('UserId', _id)
      if (status == '01') {
        history.push('profileNgo');
      } else if (status == '02') {
      localStorage.setItem('UserImage', userImage_url)

        history.push('profileUser');
        }
     

    } catch (err) {
      toast.error(`${err.response.data.error}`, {position: toast.POSITION.TOP_RIGHT})
      //alert('Erro no cadastro, tente novamente.')
    }

  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Bixarada" />

        <form onSubmit={handleLogin} >
          <h1>Faça seu logon</h1>
      
          <input
            placeholder="Seu Email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            placeholder="Sua Senha"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button className="button" type="submit" >Entrar</button>



          <Link className="back-link" to="/registerUser">
            <FiLogIn size={16} color="#1c558e" />
          Não tenho cadastro
        </Link>
        </form>
      </section>

      <img src={heroesImg} alt="Heroes" />
    </div>
  );
}