/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

import Estrangeiro from './Estrangeiro';
import Fisica from './Fisica';
// import { Container } from './styles';

export default function Assinatura() {
  const [tipoForm, setTipoForm] = useState('pessoaFisica');

  const [active, setActive] = useState(false);

  function handleFormPessoaFisica() {
    setTipoForm('pessoaFisica');
    setActive(!active);
  }

  function handleFormPessoaEstrangeira() {
    setTipoForm('pessoaEstrangeira');
    setActive(!active);
  }

  return (
    <>
      <section className="intro-assinatura">
        <p>Falta pouco!</p>
        <span className="intro-assinatura__description">
          Escolha uma das opções abaixo e preencha o formulário, que a nosso
          equipe entrará em contato.
        </span>

        <div className="switch-button mt-small">
          <span className={!active ? 'active' : 'active fide-left'} />
          <button
            type="button"
            onClick={handleFormPessoaFisica}
            className={
              active
                ? 'switch-button-case left'
                : 'switch-button-case left active-case'
            }
          >
            <span>Pessoa Física</span>
          </button>

          <button
            type="button"
            onClick={handleFormPessoaEstrangeira}
            className={
              active
                ? 'switch-button-case right active-case'
                : 'switch-button-case right'
            }
          >
            <span>Pessoa Estrangeira</span>
          </button>
        </div>
      </section>

      {tipoForm === 'pessoaFisica' ? <Fisica /> : <Estrangeiro />}
    </>
  );
}
