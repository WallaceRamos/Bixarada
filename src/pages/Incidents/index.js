import React, { useEffect, useState } from 'react';
import {  useHistory } from 'react-router-dom';


import api from '../../services/api';
import Menu from '../../components/Menu';

import './styles.css';



export default function IncidentDetail() {
  const [incidents, setIncidents] = useState([]);
 


  const history = useHistory();

  useEffect(() => {
    api.get('casos', {
   
    }).then(response => {
      setIncidents(response.data);
    })
  }, []);

  function handleDetail(id){
    history.push('incidentDetail', { id });
  }

  return (
    <>
     <Menu />
    <div className="incident-container">
      

      <h1>Casos cadastrados</h1>

      <ul>
        
        {incidents.map(incident => (
          <li key={incident.id} >
            <img src={incident.incidentImage_url} alt={incident.title}/>
            <strong>{incident.title}</strong>
            
            <strong>Meta:</strong>
            <p>{Intl.NumberFormat('pt-Br', { style: 'currency', currency: 'BRL' }).format(incident.goal)}</p>

            <strong>Arrecadado:</strong>
            <p>{Intl.NumberFormat('pt-Br', { style: 'currency', currency: 'BRL' }).format(incident.total)}</p>

           <button className="button" onClick={() => handleDetail( incident.id)} >Detalhes</button>
          </li>
        ))}

      </ul>
    </div>
    </>
  );
}