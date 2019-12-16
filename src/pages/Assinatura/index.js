/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import Estrangeiro from './Estrangeiro';
import Fisica from './Fisica';
// import { Container } from './styles';

export default function Assinatura() {
  const [tipoForm, setTipoForm] = useState('pessoaFisica');

  function handleFormPessoaFisica() {
    setTipoForm('pessoaFisica');
  }

  function handleFormPessoaEstrangeira() {
    setTipoForm('pessoaEstrangeira');
  }

  return (
    <>
      <Header />
      <section className="intro-assinatura">
        <p>Falta pouco!</p>
        <span className="intro-assinatura__description">
          Escolha uma das opções abaixo e preencha o formulário, que a nosso
          equipe entrará em contato.
        </span>

        <div className="switch-button mt-middle">
          <span className="active" />
          <button
            type="button"
            onClick={handleFormPessoaFisica}
            className="switch-button-case left active-case"
          >
            <span>Pessoa Física</span>
          </button>

          <button
            type="button"
            onClick={handleFormPessoaEstrangeira}
            className="switch-button-case right"
          >
            <span>Pessoa Estrangeira</span>
          </button>
        </div>
      </section>

      {tipoForm === 'pessoaFisica' ? <Fisica /> : <Estrangeiro />}

      <Footer />
    </>
  );
}
