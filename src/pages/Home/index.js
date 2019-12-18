import React from 'react';
import { Link } from 'react-router-dom';
import {
  IoLogoWhatsapp,
  IoMdPhonePortrait,
  IoMdCheckmark,
} from 'react-icons/io';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import slider1 from '../../assets/img/natal_2019.png';
import device from '../../assets/img/device-tv.png';
import suaEmpresa from '../../assets/img/sua-empresa.jpg';

import { Banner } from './styles';

export default function Home() {
  return (
    <>
      <Header />
      <Carousel showStatus={false} showThumbs={false} className="mt-big">
        <div>
          <img src={slider1} alt="Slider 01" />
        </div>
      </Carousel>

      <Banner>
        <p>
          Não se estresse mais com sua internet, <br />
          vem pra <strong>#Fiber!</strong>
        </p>
        <div className="banner__contato">
          <h2>Assine já:</h2>
          <button type="button" className="plan__btnBox btn-whatsapp mt-small">
            <span>
              <IoMdPhonePortrait />
              Via telefone
            </span>
          </button>

          <button type="button" className="plan__btnBox btn-whatsapp mt-small">
            <span>
              <IoLogoWhatsapp />
              Via Whatsapp
            </span>
          </button>
        </div>
      </Banner>

      <section className="paraVoce">
        <div className="paraVoce__text">
          <h2>Para sua casa</h2>
          <p className="mb-middle">
            A melhor Internet Banda Larga a sua disposição, tecnologia{' '}
            <b>100% Fibra Óptica.</b>
          </p>

          <span>
            <IoMdCheckmark color="#f26425" /> Conectividade por fibra óptica
          </span>

          <span>
            <IoMdCheckmark color="#f26425" /> Conexão com altas taxas de upload
          </span>

          <Link to="/residencial" className="plan__btnBox btn-orange">
            Ver planos
          </Link>
        </div>

        <img src={device} alt="section para voce" />
      </section>

      <section className="paraSua-empresa">
        <div className="paraSua-empresa__image">
          <img src={suaEmpresa} alt="section para voce" />
        </div>

        <div className="paraSua-empresa__text">
          <h2>Para sua empresa</h2>
          <p className="mb-middle">
            Temos a melhor e mais avançada tecnologia em Internet só para você.
          </p>

          <Link to="/empresarial" className="btn btn-orange">
            Consultar nossos planos
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
