import React from 'react';
import { MdPhonelink, MdBusiness, MdList } from 'react-icons/md';
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
              <Link to="/home" className="mobile__item--link">
                <i className="mobile__item--icon fas fa-home" />
                Home
              </Link>
            </li>

            <li className="mobile__item">
              <Link to="/residencial" className="mobile__item--link">
                Pra Você
              </Link>
            </li>

            <li className="mobile__item">
              <Link to="/empresarial" className="mobile__item--link">
                <i className="mobile__item--icon fas fa-home" />
                Empresas
              </Link>
            </li>

            <li className="mobile__item">
              <Link to="/contato" className="mobile__item--link">
                <i className="mobile__item--icon fas fa-home" />
                Contato
              </Link>
            </li>

            <li className="mobile__item">
              <a
                href="http://wiretelecom.com.br/central-assinante"
                className="mobile__item--link"
              >
                <i className="mobile__item--icon fas fa-external-link-alt" />
                Central do Assinante
              </a>
            </li>

            <li className="mobile__item">
              <a
                href="https://www.minhaconexao.com.br/?server_id=002992"
                className="mobile__item--link"
              >
                <i className="mobile__item--icon fas fa-tachometer-alt" />
                Teste de Velocidade
              </a>
            </li>

            <li className="mobile__item">
              <a
                href="http://webmail.wiretelecom.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile__item--link"
              >
                <i className="mobile__item--icon fas fa-envelope-square" />
                Webmail
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </Container>
  );
}
