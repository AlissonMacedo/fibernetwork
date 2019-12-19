import React from 'react';
import { FaConnectdevelop } from 'react-icons/fa';

export default function AreaCliente() {
  return (
    <>
      <section className="intro-areaCliente tracking-in-expand">
        <p>Área do Cliente</p>
        <span className="intro-areaCliente__description">
          Acesso Rápido | Teste de Velocidade
        </span>

        <br />

        <a
          href="http://sistema.fibernetwork.com.br:40860/central"
          className="btn btn-white"
        >
          <span>Acessar Central do Assinante</span>
        </a>
      </section>

      <section className="area-cliente">
        <div className="teste-velocidade">
          <div className="teste-velocidade__card">
            <FaConnectdevelop size={20} />
            <h2>Alterar Senha</h2>
          </div>

          <div className="teste-velocidade__card">
            <FaConnectdevelop size={20} />
            <h2>Outros Serviços</h2>
          </div>
          <div className="teste-velocidade__card">
            <FaConnectdevelop size={20} />
            <h2>Segunda Via de Boletos</h2>
          </div>
          <div className="teste-velocidade__card">
            <FaConnectdevelop size={20} />
            <h2>Dados Cadastrais</h2>
          </div>

          <div className="teste-velocidade__card">
            <FaConnectdevelop size={20} />
            <h2>Serviços Contratados</h2>
          </div>

          <div className="teste-velocidade__card">
            <FaConnectdevelop size={20} />
            <h2>Download Contrato Fiber Network</h2>
          </div>

          <div className="teste-velocidade__card">
            <FaConnectdevelop size={20} />
            <h2>Histórico de Mensagens</h2>
          </div>

          <div className="teste-velocidade__card">
            <FaConnectdevelop size={20} />
            <h2>Relatório de Utilização</h2>
          </div>

          <div className="teste-velocidade__card">
            <FaConnectdevelop size={20} />
            <h2>Protocolo de Atendimento</h2>
          </div>

          <div className="teste-velocidade__card">
            <FaConnectdevelop size={20} />
            <h2>Pagamentos Online</h2>
          </div>

          <div className="teste-velocidade__card">
            <FaConnectdevelop size={20} />
            <h2>Suporte Online</h2>
          </div>

          <div className="teste-velocidade__card">
            <FaConnectdevelop size={20} />
            <h2>Histórico Financeiro</h2>
          </div>
        </div>

        <p className="mt-bigger">
          Escolha um dos servidores abaixo para iniciar o teste:
        </p>
        <div className="teste-velocidade">
          <div className="teste-velocidade__card">
            <h2>Minha Conexão</h2>
            <a href="http://www.minhaconexao.com.br/?server_id=002132">
              <span>Iniciar teste</span>
            </a>
          </div>

          <div className="teste-velocidade__card">
            <h2>nPerf</h2>
            <a href="https://simet.nic.br/projetos/simet-app.html">
              <span>Iniciar teste</span>
            </a>
          </div>
          <div className="teste-velocidade__card">
            <h2>Simet</h2>
            <a href="https://simet.nic.br/projetos/simet-app.html">
              <span>Iniciar teste</span>
            </a>
          </div>
          <div className="teste-velocidade__card">
            <h2>Speed Test</h2>
            <a href="http://www.speedtest.net/pt">
              <span>Iniciar teste</span>
            </a>
          </div>

          <div className="teste-velocidade__card">
            <h2>Netflix Fast</h2>
            <a href="https://fast.com/pt/">
              <span>Iniciar teste</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}