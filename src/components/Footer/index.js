import React from 'react';

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
              href="http://sistema.wiretelecom.com.br/modulos/cda/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              <p>
                <i className="fas fa-chevron-right" /> Protocolo de Atendimento
              </p>
            </a>

            <a
              href="http://sistema.wiretelecom.com.br/modulos/cda/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              <p>
                <i className="fas fa-chevron-right" /> Histórico Financeiro
              </p>
            </a>

            <a
              href="http://sistema.wiretelecom.com.br/modulos/cda/"
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

            <a href="mailto:sac@wiretelecom.com.br" className="nav-link">
              <p>
                <i className="far fa-envelope" /> sac@fibernetwork.com.br
              </p>
            </a>

            <a
              href="https://api.whatsapp.com/send?phone=5592991073266"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              <p>
                <i className="fab fa-whatsapp" /> 92 9.9316.3444
              </p>
            </a>

            <a href="tel:9233064104" className="nav-link">
              <p>
                <i className="fas fa-phone" /> 92 3199.1000
              </p>
            </a>

            <a href="tel:08008788271" className="nav-link">
              <p>
                <i className="fas fa-phone" /> 0800 878 8194
              </p>
            </a>
          </div>
        </div>

        <div className="col-1-of-4">
          <div className="footer__icons-social">
            <h2>Siga-nos</h2>

            <a
              href="https://pt-br.facebook.com/wiretelecom/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              <i className="fab fa-facebook" />
            </a>

            <a href="!#" className="nav-link">
              <i className="fab fa-instagram" />
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
