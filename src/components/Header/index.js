import React from 'react';
import { MdPhonelink, MdBusiness } from 'react-icons/md';
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from 'react-icons/fa';

import { Link } from 'react-router-dom';

import logo from '../../assets/img/logo_fiber.png';
import { Container, Dropdown } from './styles';

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
              <li>
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
    </Container>
  );
}
