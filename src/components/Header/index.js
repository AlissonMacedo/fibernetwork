import React from 'react';
import {
  MdPhonelink,
  MdBusiness,
  MdList,
  MdHeadsetMic,
  MdDashboard,
  MdMail,
  MdHome,
} from 'react-icons/md';
import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from 'react-icons/fa';

import logo from '../../assets/img/logo_fiber.png';
import logoFiber from '../../assets/img/logo_fiber.svg';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <header className="menu fixed">
        <div className="menu__content">
          <Link to="/">
            <img src={logo} alt="Fiber Network" />
          </Link>
          <nav>
            <ul>
              {/* <li>
                Nossos planos
                <Dropdown>
                  <li>
                    <MdPhonelink />
                    <Link to="/residencial">Para Você</Link>
                  </li>
                  <li>
                    <MdBusiness />
                    <Link to="/residencial">Para Sua Empresa</Link>
                  </li>
                </Dropdown>
              </li> */}
              <li>
                <Link to="/residencial">Pra Você</Link>
              </li>

              <li>
                <Link to="/empresarial">Empresas</Link>
              </li>

              <li>
                <Link to="/contato">Contato</Link>
              </li>

              <li>
                <Link to="/area-cliente">Área do Cliente</Link>
              </li>

              <li>|</li>

              <li>
                <FaFacebookSquare />
              </li>
              <li>
                <FaInstagram />
              </li>
              <li>
                <FaWhatsapp />
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="mobile">
        <label htmlFor="toogle" className="mobile__btn">
          <MdList className="mobile__btn--icon" />
        </label>
        <input type="checkbox" className="mobile__checkbox" id="toogle" />

        <nav className="mobile__menu">
          <div className="mobile__header">
            <img
              className="mobile__header--photo"
              src={logoFiber}
              alt="Fiber Network"
            />
            <span className="mobile__header--text">
              <b>Fiber Network</b>
            </span>
          </div>

          <ul className="mobile__list">
            <li className="mobile__item">
              <Link to="/" className="mobile__item--link">
                <MdHome className="mobile__btn--icon" />
                Home
              </Link>
            </li>

            <li className="mobile__item">
              <Link to="/residencial" className="mobile__item--link">
                <MdPhonelink className="mobile__btn--icon" />
                Pra Você
              </Link>
            </li>

            <li className="mobile__item">
              <Link to="/empresarial" className="mobile__item--link">
                <MdBusiness className="mobile__btn--icon" />
                Empresas
              </Link>
            </li>

            <li className="mobile__item">
              <Link to="/contato" className="mobile__item--link">
                <MdHeadsetMic className="mobile__btn--icon" />
                Contato
              </Link>
            </li>

            <li className="mobile__item">
              <Link to="/area-cliente" className="mobile__item--link">
                <MdDashboard className="mobile__btn--icon" />
                Área do Cliente
              </Link>
            </li>

            <li className="mobile__item">
              <a
                href="http://webmail.wiretelecom.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile__item--link"
              >
                <MdMail className="mobile__btn--icon" />
                Webmail
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </Container>
  );
}
