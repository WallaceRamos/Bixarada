import React, { useMemo, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import camera from '../../assets/camera.svg';


import api from '../../services/api';
import Menu from '../../components/MenuUser';
import Footer from '../../components/Footer';

import './styles.css';



export default function UpdateUser() {
  const [incidents, setIncidents] = useState([]);

  const [userImage, setUserImage] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [adress, setAdress] = useState('');



  const ImageProfile = localStorage.getItem('UserImage')

  const ongId = localStorage.getItem('UserId')

  const history = useHistory();
  toast.configure();

  const preview = useMemo(() => {
    return userImage ? URL.createObjectURL(userImage) : ImageProfile;
  }, [userImage])

  useEffect(() => {
    api.get(`apoiador/${ongId}`, {
   
    }).then(response => {
      setIncidents(response.data);
      setName(response.data.name);
      setEmail(response.data.email);
      setBirthdate(response.data.birthdate);
      setAdress(response.data.adress);
    })
  }, []);

  async function Validation() {
    if (userImage === null || userImage === undefined) {
      toast.error(`Selecione uma imagem`, { position: toast.POSITION.TOP_RIGHT })
      return false
    }
    if (name === '' || name === undefined){
      toast.error(`Escreva seu primeiro nome`, { position: toast.POSITION.TOP_RIGHT })
      return false
    }
    if (email === '' || email === undefined){
      toast.error(`Escreva seu email`, { position: toast.POSITION.TOP_RIGHT })
      return false
    }
    if (birthdate === '' || birthdate === undefined){
      toast.error(`Escreva sua data de nacimento`, { position: toast.POSITION.TOP_RIGHT })
      return false
    }
    if (adress === '' || adress === undefined){
      toast.error(`Escreva um endereço`, { position: toast.POSITION.TOP_RIGHT })
      return false
    }
  }

  async function handleUpdate(e) {
    e.preventDefault();

    try {

Validation();


      const dados = new FormData();


      dados.append('userImage', userImage)
      dados.append('name', name)
      dados.append('email', email)
      dados.append('birthdate', birthdate)
      dados.append('adress', adress)


      const response = await api.put(`apoiadores/${ongId}`, dados)
      
      localStorage.setItem('UserName', response.data.name)
      localStorage.setItem('UserId', response.data._id)
      localStorage.setItem('UserImage', response.data.userImage_url)

      toast.success(`Cadastro realizado com sucesso, ${response.data.name}`, { position: toast.POSITION.TOP_RIGHT })
      history.push('/profileUser');
    } catch (err) {
      toast.error(`${err.response.data.error}`, { position: toast.POSITION.TOP_RIGHT })
    }
  }

  function handleLogout() {
    localStorage.clear();

    history.push('/');
  }

  return (
    <>
      <Menu />
      <div data={incidents} className="updateProfile-container">
        <form onSubmit={handleUpdate} >
        <label
             id="userImage"
             className={userImage ? 'has-thumbnail' : ''}
          >
            <input type="file" onChange={e => setUserImage(e.target.files[0])} />
            <img src={preview} alt="Select Img" />
          </label>

          <input
            placeholder="Seu Nome"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            placeholder="Seu E-mail"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <hr/>
          <input
            placeholder="Sua Data de nacimento"
            value={birthdate}
            onChange={e => setBirthdate(e.target.value)}
          />
          
            <input
              placeholder="Seu endereço"
              value={adress}
              onChange={e => setAdress(e.target.value)}
            />
           
          <button type="submit" >Atualizar Pefil</button>
        </form>
        <button type="button" onClick={handleLogout} >Sair do Bixarada</button>

      </div>
      <Footer />
    </>
  );
}