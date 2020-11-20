import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import LogoImg from '../../assets/Bixarada.png'

export default function Profile() {
  const [incidents, setIncidents] = useState([]);

  const ongId = localStorage.getItem('UserId')
  const ongName = localStorage.getItem('UserName')

  const history = useHistory();

  useEffect(() => {
    api.get('perfil', {
      headers: {
        Authorization: ongId,
      }
    }).then(response => {
      setIncidents(response.data);
    })
  }, [ongId]);


  // async function handleDeleteIncidente(id) {
  //   try {
  //     await api.delete(`incidents/${id}`, {
  //       headers: {
  //         Authorization: ongId,
  //       }
  //     });

  //     setIncidents(incidents.filter(incident => incident.id !== id));
  //   } catch (err) {
  //     alert('Erro ao deletar caso, tente novamente.');
  //   }
  // }

  function handleLogout() {
    localStorage.clear();

    history.push('/');
  }

  return (
    <div className="profile-container">
      <header className="Header">
        <img src={LogoImg} alt="Bixarada" />
        

        <Link className="button" to="/newIncidents">Cadastrar novo caso</Link>
        <button
          onClick={handleLogout}
          type="button"
        >
          <FiPower size={18} color="#1c558e" />
        </button>
      </header>
      <span>Bem vinda, {ongName}</span>
      <h1>Casos cadastrados</h1>

      <ul>
        {incidents.map(incident => (
          <li key={incident.id} >
             <strong>{incident.start}</strong>
            <img src={incident.incidentImage_url} alt={incident.title}/>
            <strong className="title">{incident.title}</strong>
                      
            <p className="title"></p>

            <strong>VALOR:</strong>
            <p>{Intl.NumberFormat('pt-Br', { style: 'currency', currency: 'BRL' }).format(incident.total)}</p>

            
          </li>
        ))}

      </ul>
    </div>
  );
}