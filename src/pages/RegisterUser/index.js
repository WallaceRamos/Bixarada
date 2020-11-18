import React, { useState, useMemo } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { mask } from 'remask'
import { toast } from 'react-toastify';

import api from '../../services/api';
import camera from '../../assets/camera.svg';

import './styles.css';

import logoImg from '../../assets/logo.svg';


export default function Register() {
  const [userImage, setUserImage] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');
  const [status, setStatus] = useState(2);
  const [password, setPassword] = useState('');

  const history = useHistory();
  toast.configure();

  const preview = useMemo(() => {
    return userImage ? URL.createObjectURL(userImage) : null;
  }, [userImage])


  async function handleRegister(e) {
    e.preventDefault();
    try {
      
    const data = new FormData();


    data.append('userImage', userImage)
    data.append('name', name)
    data.append('email', email)
    data.append('birthdate', birthdate)
    data.append('adress', city + uf)
    data.append('password', password)
    data.append('status', status)

      const response = await api.post('apoiadores', data)

      toast.success(`Cadastro realizado com sucesso, ${response.data.name}`, {position: toast.POSITION.TOP_RIGHT})
      history.push('/logon');
    } catch (err) {
      toast.error(`${err.response.data.error}`, {position: toast.POSITION.TOP_RIGHT})
    }
  }
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Logo Bixarada" />

          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#1c558e" />
          Já tenho cadastro
        </Link>
        </section>

        <form onSubmit={handleRegister} className="formRegister">
          <div className="ButtonForms">
            <p className="ButtonRegisterActivity">Apoiador</p>
            <Link className="ButtonRegister" to="/registerNgo">ONG</Link>

          </div>
          <label
            id="userImage"
            style={{ backgroundImage: `url(${preview})` }}
            className={userImage ? 'has-thumbnail' : ''}
          >
            <input type="file" onChange={e => setUserImage(e.target.files[0])} />
            <img src={camera} alt="Select Img" />
          </label>
          <input
            id="name"
            placeholder="Nome "
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            id="email"
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            id="birthdate"
            placeholder="birthdate"
            value={mask(birthdate, ['99/99/9999'])}
            onChange={e => setBirthdate(e.target.value)}
          />

          <div className="input-group">
            <input
              placeholder="Cidade"
              value={city}
              onChange={e => setCity(e.target.value)}
            />
            <select placeholder="UF"   style={{ width: 80 }} value={uf} onChange={e => setUf(e.target.value)}>
  <option value="" disabled selected > -- </option>
  <option value=" AC">AC</option>
	<option value=" AL">AL</option>
	<option value=" AP">AP</option>
	<option value=" AM">AM</option>
	<option value=" BA">BA</option>
	<option value=" CE">CE</option>
	<option value=" DF">DF</option>
	<option value=" ES">ES</option>
	<option value=" GO">GO</option>
	<option value=" MA">MA</option>
	<option value=" MT">MT</option>
	<option value=" MS">MS</option>
	<option value=" MG">MG</option>
	<option value=" PA">PA</option>
	<option value=" PB">PB</option>
	<option value=" PR">PR</option>
	<option value=" PE">PE</option>
	<option value=" PI">PI</option>
	<option value=" RJ">RJ</option>
	<option value=" RN">RN</option>
	<option value=" RS">RS</option>
	<option value=" RO">RO</option>
	<option value=" RR">RR</option>
	<option value=" SC">SC</option>
	<option value=" SP">SP</option>
	<option value=" SE">SE</option>
	<option value=" TO">TO</option>
 
</select>
            
          </div>
          <input
            id="password"
            placeholder="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button className="button" type="submit" >Cadastrar</button>
        </form>
      </div>
    </div>
  );
}