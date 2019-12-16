/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
// import { Container } from './styles';

export default function Assinatura() {
  return (
    <>
      <Header />
      <section className="intro-assinatura">
        <p>Falta pouco!</p>
        <span>
          Escolha uma das opções abaixo e preencha o formulário, que a nosso
          equipe entrará em contato.
        </span>
      </section>
      <form onSubmit={() => {}} className="form">
        <div className="section-contato__text-box mb-small">
          <h2>Dados Pessoais</h2>
        </div>

        <div className="form-box">
          <div className="form__group group-width">
            <input
              value={() => {}}
              onChange={() => {}}
              type="text"
              className="form__input"
              placeholder="Nome Completo"
              id="nome"
              name="nome"
              required
            />
            <label htmlFor="nome" className="form__label">
              Nome Completo
            </label>
          </div>

          <div className="form__group group-width">
            <input
              value={() => {}}
              onChange={() => {}}
              type="email"
              className="form__input"
              placeholder="Seu melhor email"
              id="email"
              name="email"
              required
            />
            <label htmlFor="email" className="form__label">
              Email
            </label>
          </div>

          <div className="form__group group-width">
            <input
              value={() => {}}
              onChange={() => {}}
              type="text"
              className="form__input"
              id="telefone"
              name="telefone"
              required
            />
            <label htmlFor="telefone" className="form__label">
              Telefone
            </label>
          </div>
        </div>

        <div className="section-contato__text-box mb-small">
          <h2>Plano selecionado:</h2>
        </div>

        <div className="form-box">
          <div className="form__group group-width">
            <select className="form__input" id="plano" name="plano" required>
              <option>{() => {}}</option>
            </select>
            <label htmlFor="plano" className="form__label">
              veja acima
            </label>
          </div>
        </div>

        <div className="section-contato__text-box mt-small mb-small">
          <h2>Endereço para instalação</h2>
        </div>

        <div className="form-box">
          <div className="form__group">
            <input
              value={() => {}}
              onChange={() => {}}
              placeholder="xxxxx-xxx"
              type="text"
              className="form__input"
              id="cep"
              name="cep"
              required
            />
            <label htmlFor="cep" className="form__label">
              Cep
            </label>
          </div>

          <div className="form__group group-width">
            <input
              value={() => {}}
              onChange={() => {}}
              type="text"
              className="form__input"
              placeholder="Rua, Av."
              id="rua"
              name="rua"
              required
            />
            <label htmlFor="endereco" className="form__label">
              Rua
            </label>
          </div>

          <div className="form__group group-width">
            <input
              value={() => {}}
              onChange={() => {}}
              type="text"
              className="form__input"
              placeholder="Bairro"
              id="bairro"
              name="bairro"
              required
            />
            <label htmlFor="bairro" className="form__label">
              Bairro
            </label>
          </div>

          <div className="form__group">
            <input
              value={() => {}}
              onChange={() => {}}
              type="text"
              className="form__input"
              placeholder="Número"
              id="numero"
              name="numero"
              required
            />
            <label htmlFor="endereco" className="form__label">
              Número
            </label>
          </div>

          <div className="form__group group-width">
            <input
              value={() => {}}
              onChange={() => {}}
              type="text"
              className="form__input"
              placeholder="Complemento"
              id="complemento"
              name="complemento"
              required
            />
            <label htmlFor="complemento" className="form__label">
              Complemento
            </label>
          </div>

          <div className="form__group">
            <input
              value={() => {}}
              onChange={() => {}}
              type="text"
              className="form__input"
              placeholder="Cidade"
              id="cidade"
              name="cidade"
              required
            />
            <label htmlFor="cidade" className="form__label">
              Cidade
            </label>
          </div>

          <div className="form__group">
            <input
              value={() => {}}
              onChange={() => {}}
              type="text"
              className="form__input"
              placeholder="Estado"
              id="estado"
              name="estado"
              required
            />
            <label htmlFor="estado" className="form__label">
              Estado
            </label>
          </div>
        </div>

        <div className="form-box">
          <div className="form__group">
            <button
              type="submit"
              className="btn submit btn-orange"
              value="Enviar"
            >
              Enviar
            </button>
          </div>
        </div>
      </form>
      <Footer />
    </>
  );
}
