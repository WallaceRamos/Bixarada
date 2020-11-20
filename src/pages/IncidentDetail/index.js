import React, { useEffect, useState } from 'react';
import {  useHistory, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';



import api from '../../services/api';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';


import './styles.css';



export default function IncidentDetail() {
  const [incidents, setIncidents] = useState([]);

  const history = useHistory();

  const location = useLocation();
  toast.configure();

  const IncidenteId = location.state.Id


  useEffect(() => {
    api.get(`casos/${IncidenteId}`, {

    }).then(response => {
      setIncidents(response.data);
    })
  }, []);

  function handleLogin(){
    toast.error(`Faça o login ou se cadastre para Apoiar no caso`, {position: toast.POSITION.TOP_RIGHT});
    history.push('logon');
  }

  return (
    <>
      <Menu />

      <div data={incidents} className="incidentDetail-container">

        <div className="card">
          <div class="images">
            <h2>{incidents.title}</h2>
            <div class="slider">
              <img src={incidents.incidentImage_url} alt={incidents.title} />
            </div>
          </div>
          <div class="infos">
            <h1>{incidents.title}</h1>
            <div class="price">
              <h3>Meta {Intl.NumberFormat('pt-Br', { style: 'currency', currency: 'BRL' }).format(incidents.goal)}</h3>
              <h3>Valor Arrecadado {Intl.NumberFormat('pt-Br', { style: 'currency', currency: 'BRL' }).format(incidents.total)}</h3>
            </div>
            <div id="more-infos">
              <h5 class="choose">Descrição</h5>

            </div>
            <div id="info-content">
              <p class="paragraph" >{incidents.description}</p>

            </div>

            <div class="buttons"></div>

            <button className="button" onClick={() => handleLogin()}>APOIAR</button>

          </div>
        </div>


        {/* <ul>

            {incidents.map(incident => (
              <li key={incident.id} >
                <strong>CASO:</strong>
                <p>{incident.title}</p>

                <strong>DESCRIÇÃO:</strong>
                <p>{incident.description}</p>

                <strong>Meta:</strong>
                <p>{Intl.NumberFormat('pt-Br', { style: 'currency', currency: 'BRL' }).format(incident.goal)}</p>

                <strong>Arrecadado:</strong>
                <p>{Intl.NumberFormat('pt-Br', { style: 'currency', currency: 'BRL' }).format(incident.total)}</p>

                <button className="button" onClick={() => handleDetail(incident.id)} >Detalhes</button> 
              </li>
            ))}

          </ul> */}
      </div>
<Footer />
    </>
  );
}