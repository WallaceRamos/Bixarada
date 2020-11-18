import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import Carousel from 'nuka-carousel';


import api from '../../services/api';

import './styles.css';

import Menu from '../../components/Menu';
import ImgHeroes from '../../assets/heroes.svg';
import ImgFriend from '../../assets/friend.svg';
import ImgWalking from '../../assets/walking.svg';

export default function Home() {
  


  
  return (
    <>
   <Menu />

      <Carousel
        className="sliderContainer"
        autoplayInterval={10000}
        autoplay={true}
        wrapAround={true}
        slidesToScroll="auto"
        renderCenterLeftControls={({ previousSlide }) => (
          <button className="buttonSlider" onClick={previousSlide}><FiArrowLeft  size={22} color="#1c558e" /></button>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <button className="buttonSlider" onClick={nextSlide}><FiArrowRight size={22} color="#1c558e" /></button>
        )}
      >
        <div className="containerItem">
          <div className="contentContainer">
            <h1>teste</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been
            </p>
            <button> Veja mais </button>
          </div>
          <div className="bgContainer">
            <img src={ImgHeroes} />

          </div>
        </div>
        <div className="containerItem">
          <div className="contentContainer">
            <h1>teste</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been
            </p>
            <button> Veja mais </button>
          </div>
          <div className="bgContainer">
            <img src={ImgFriend} />

          </div>
        </div>
        <div className="containerItem">
          <div className="contentContainer">
            <h1>teste</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been
            </p>
            <button> Veja mais </button>
          </div>
          <div className="bgContainer">
            <img src={ImgWalking} />

          </div>
        </div>
      </Carousel>

<section className="comofunciona">
  <div className="content">
  <h1>Como funciona?</h1>
  <h3>Inicie uma campanha ou rifa</h3>
  <p>Se você resgatou um animalzinho e precisa de ajuda no tratamento faça seu cadastro e crie um perfil online do animal regatado.

Receba doações através do perfil criado ou organize uma rifa.

Temos uma plataforma de Rifa exclusiva onde você automatiza todo o processo desde a criação ao sorteio da Rifa.</p>
</div>
<div className="Imagem">
  <img src={ImgWalking} />
  </div>
</section>

<section className="comofunciona">
  
<div className="Imagem">
  <img src={ImgWalking} />
  </div>
  <div className="content">
    <h3>Divulgue</h3>
  <p>Coloque fotos, informações do petshop ou clínica veterinária e divulgue sua campanha de arrecadação.

Compartilhe o perfil no Facebook ou Twitter</p>
</div>
</section>
<section className="comofunciona">
  <div className="content">

  <h3>Receba</h3>
  <p>Quando sua campanha finalizar receba o valor arrecadado diretamente em sua conta e poste a evolução do quadro clínico do animal.

Os pagamentos são gerenciados pelo PagSeguro da UOL</p>
</div>
<div className="Imagem">
  <img src={ImgWalking} />
  </div>
</section>
<footer className="footer">
  <div><h1>ola</h1></div>
  <div><h1>Mundo</h1></div>
</footer>
    </>
  );
}