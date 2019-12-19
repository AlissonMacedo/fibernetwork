import React from 'react';
import { IoLogoWhatsapp } from 'react-icons/io';
import { MdPhoneInTalk, MdMail } from 'react-icons/md';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';

import logo from '../../assets/img/logo_fiber.png';
// import { Container } from './styles';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="row">
        <div className="col-1-of-4">
          <img src={logo} alt="Wire Telecom" />
        </div>

        <div className="col-1-of-4">
          <div className="footer__menu">
            <h2>Central do Assinante</h2>

            <a
              href="http://sistema.fibernetwork.com.br:40860/central"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              <p>
                <i className="fas fa-chevron-right" /> Protocolo de Atendimento
              </p>
            </a>

            <a
              href="http://sistema.fibernetwork.com.br:40860/central"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              <p>
                <i className="fas fa-chevron-right" /> Histórico Financeiro
              </p>
            </a>

            <a
              href="http://sistema.fibernetwork.com.br:40860/central"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              <p>
                <i className="fas fa-chevron-right" /> Suporte Online
              </p>
            </a>
          </div>
        </div>

        <div className="col-1-of-4">
          <div className="footer__menu">
            <h2>Contato</h2>

            <a href="sac@fibernetwork.com.br" className="nav-link">
              <p>
                <MdMail /> sac@fibernetwork.com.br
              </p>
            </a>

            <a href="tel:08008788194" className="nav-link">
              <p>
                <MdPhoneInTalk /> 0800 878 8194
              </p>
            </a>

            <a href="tel:9231991000" className="nav-link">
              <p>
                <MdPhoneInTalk /> 92 3199.1000
              </p>
            </a>

            <a
              href="https://api.whatsapp.com/send?phone=5592993163444"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              <p>
                <IoLogoWhatsapp /> 92 9.9316.3444
              </p>
            </a>
          </div>
        </div>

        <div className="col-1-of-4">
          <div className="footer__icons-social">
            <h2>Siga-nos</h2>

            <a
              href="https://www.facebook.com/fibernetwork.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              <FaFacebookSquare />
            </a>

            <a
              href="https://www.instagram.com/fiber_network_/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              <FaInstagram />
            </a>

            <a
              href="https://api.whatsapp.com/send?phone=5592991073266"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              <i className="fab fa-whatsapp" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer__copyright">
        <p>
          Todos os direitos reservados &copy; 2019 - Desenvolvido pela
          <b> Fiber Network</b>
        </p>
      </div>
    </footer>
  );
}
