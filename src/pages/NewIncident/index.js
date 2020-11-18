import React, { useState, useMemo } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import camera from '../../assets/camera.svg';

import logoImg from '../../assets/logo.svg';

import './styles.css';

export default function NewIncident() {
  const [incidentImage, setIncidentImage] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [goal, setGoal] = useState();
  const [total, setTotal] = useState(0);
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  const ongId = localStorage.getItem('UserId');

  const history = useHistory();

  const preview = useMemo(() => {
    return incidentImage ? URL.createObjectURL(incidentImage) : null;
  }, [incidentImage])

  async function handleNewIncident(e) {
    e.preventDefault();

    try {
      const data = new FormData();


    data.append('incidentImage', incidentImage)
    data.append('title', title)
    data.append('description', description)
    data.append('goal', goal)
    data.append('total', total)
    data.append('start', start)
    data.append('end', end)
  


      await api.post('casos', data, {
        headers: {
          Authorization: ongId,
        }
      })

      history.push('/profileNog');
    } catch (err) {
      alert(err.response.data.error)
    }
  }
    return (
      <div className="new-incident-container">
        <div className="content">
          <section>
            <img src={logoImg} alt="Bixarada" />

            <h1>Cadastrar novo caso</h1>
            <p>Descreva o caso detalhadamente para encontrar um apoiadores para relover.</p>

            <Link className="back-link" to="/profileNog">
              <FiArrowLeft size={16} color="#1c558e" />
        Voltar para home
      </Link>
          </section>
          <form onSubmit={handleNewIncident}>
          <label
            id="incidentImage"
            style={{ backgroundImage: `url(${preview})` }}
            className={incidentImage ? 'has-thumbnail' : ''}
          >
            <input type="file" onChange={e => setIncidentImage(e.target.files[0])} />
            <img src={camera} alt="Select Img" />
          </label>
            <input
              placeholder="Titulo do caso"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            <textarea
              placeholder="descrição"
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
            <input
              placeholder="meta"
              value={goal}
              onChange={e => setGoal(e.target.value)}
            />
            <input
              placeholder="data start"
              value={start}
              onChange={e => setStart(e.target.value)}
            />
            <input
              placeholder="data end"
              value={end}
              onChange={e => setEnd(e.target.value)}
            />


            <button className="button" type="submit" >Cadastrar</button>
          </form>
        </div>
      </div>
    );
  }