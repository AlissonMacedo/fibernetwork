import React from 'react';
import { Link } from 'react-router-dom';
import {
  IoLogoWhatsapp,
  IoMdPhonePortrait,
  IoMdCheckmark,
} from 'react-icons/io';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import slider1 from '../../assets/img/natal_2019.png';
import slider2 from '../../assets/img/ultra-rapida.png';
import device from '../../assets/img/device-tv.png';
import suaEmpresa from '../../assets/img/sua-empresa.jpg';

import { Banner } from './styles';

export default function Home() {
  return (
    <>
      <Carousel
        showStatus={false}
        showThumbs={false}
        className="mt-big-carousel"
        autoPlay
        interval={5000}
        infiniteLoop
        stopOnHover
      >
        <div>
          <img src={slider1} alt="Slider 01" />
        </div>
        <div>
          <img src={slider2} alt="Slider 02" />
        </div>
      </Carousel>

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

      <Banner>
        <p>
          Não se estresse mais com sua internet, <br />
          vem pra <strong>#Fiber!</strong>
        </p>
        <div className="banner__contato">
          <h2>Assine já:</h2>
          <a
            href="tel:9231991000"
            className="plan__btnBox btn-whatsapp mt-small"
          >
            <span>
              <IoMdPhonePortrait />
              Via telefone
            </span>
          </a>

          <a
            href="https://api.whatsapp.com/send?phone=5592993163444"
            className="plan__btnBox btn-whatsapp mt-small"
          >
            <span>
              <IoLogoWhatsapp />
              Via Whatsapp
            </span>
          </a>
        </div>
      </Banner>
    </>
  );
}
