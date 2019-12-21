import React from 'react';
import { Link } from 'react-router-dom';
import {
  MdLockOutline,
  MdRecentActors,
  MdTrendingUp,
  MdDescription,
  MdRecordVoiceOver,
  MdPayment,
  MdQuestionAnswer,
  MdFileDownload,
  MdInsertDriveFile,
  MdInsertChart,
  MdApps,
  MdList,
} from 'react-icons/md';

import contrato from '../../assets/download/CONTRATO_FIBER_NETWORK.pdf';

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
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Acessar Central do Assinante</span>
        </a>
      </section>

      <section className="area-cliente">
        <div className="teste-velocidade">
          <div className="teste-velocidade__card">
            <MdLockOutline size={20} />
            <a
              href="http://sistema.fibernetwork.com.br:40860/central"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>Alterar Senha</h2>
            </a>
          </div>

          <div className="teste-velocidade__card">
            <MdApps size={20} />
            <a
              href="http://sistema.fibernetwork.com.br:40860/central"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>Outros Serviços</h2>
            </a>
          </div>
          <div className="teste-velocidade__card">
            <MdInsertDriveFile size={20} />
            <a
              href="http://sistema.fibernetwork.com.br:40860/central"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>Segunda Via de Boletos</h2>
            </a>
          </div>
          <div className="teste-velocidade__card">
            <MdRecentActors size={20} />
            <a
              href="http://sistema.fibernetwork.com.br:40860/central"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>Dados Cadastrais</h2>
            </a>
          </div>

          <div className="teste-velocidade__card">
            <MdList size={20} />
            <a
              href="http://sistema.fibernetwork.com.br:40860/central"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>Serviços Contratados</h2>
            </a>
          </div>

          <div className="teste-velocidade__card">
            <MdFileDownload size={20} />
            <a
              href={contrato}
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <h2>Download Contrato Fiber Network</h2>
            </a>
          </div>

          <div className="teste-velocidade__card">
            <MdQuestionAnswer size={20} />
            <a
              href="http://sistema.fibernetwork.com.br:40860/central"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>Histórico de Mensagens</h2>
            </a>
          </div>

          <div className="teste-velocidade__card">
            <MdTrendingUp size={20} />
            <a
              href="http://sistema.fibernetwork.com.br:40860/central"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>Relatório de Utilização</h2>
            </a>
          </div>

          <div className="teste-velocidade__card">
            <MdDescription size={20} />
            <a
              href="http://sistema.fibernetwork.com.br:40860/central"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>Protocolo de Atendimento</h2>
            </a>
          </div>

          <div className="teste-velocidade__card">
            <MdPayment size={20} />
            <a
              href="http://sistema.fibernetwork.com.br:40860/central"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>Pagamentos Online</h2>
            </a>
          </div>

          <div className="teste-velocidade__card">
            <MdRecordVoiceOver size={20} />
            <a
              href="http://sistema.fibernetwork.com.br:40860/central"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>Suporte Online</h2>
            </a>
          </div>

          <div className="teste-velocidade__card">
            <MdInsertChart size={20} />
            <a
              href="http://sistema.fibernetwork.com.br:40860/central"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>Histórico Financeiro</h2>
            </a>
          </div>
        </div>

        <p className="mt-bigger">
          Escolha um dos servidores abaixo para iniciar o teste:
        </p>
        <div className="teste-velocidade">
          <div className="teste-velocidade__card">
            <h2>Minha Conexão</h2>
            <a
              className="ml-small"
              href="http://www.minhaconexao.com.br/?server_id=002132"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Iniciar teste</span>
            </a>
          </div>

          <div className="teste-velocidade__card">
            <h2>nPerf</h2>

            <a
              className="ml-small"
              href="https://simet.nic.br/projetos/simet-app.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Iniciar teste</span>
            </a>
          </div>
          <div className="teste-velocidade__card">
            <h2>Simet</h2>
            <a
              className="ml-small"
              href="https://simet.nic.br/projetos/simet-app.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Iniciar teste</span>
            </a>
          </div>
          <div className="teste-velocidade__card">
            <h2>Speed Test</h2>
            <a
              className="ml-small"
              href="http://www.speedtest.net/pt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Iniciar teste</span>
            </a>
          </div>

          <div className="teste-velocidade__card">
            <h2>Netflix Fast</h2>
            <a
              className="ml-small"
              href="https://fast.com/pt/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Iniciar teste</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
