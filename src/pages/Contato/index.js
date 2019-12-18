/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { MdEmail, MdLocationOn, MdGroup, MdPhonelink } from 'react-icons/md';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';

import contato from '../../assets/img/contato.svg';

export default function Contato() {
  return (
    <>
      <section className="section-contato">
        <div className="section-contato__textBox tracking-in-expand">
          <h1>
            Bem vindo ao atendimento <br /> online da
            <strong> Fiber Network</strong>
          </h1>
          <p>
            Escolha uma das opções abaixo,
            <br /> e entre em contato conosco.
          </p>
        </div>

        <div className="section-contato__imageBox tilt-in-top-1">
          <img src={contato} alt="contato" />
        </div>
      </section>

      <section className="section-ContactInfo">
        <div className="card">
          <div className="card__icon">
            <MdGroup color="#fff" size={30} />
          </div>
          <strong>Suporte Técnico</strong>

          <span>0800 878 8194</span>

          <span>(92) 3199.1000</span>

          <span>(92) 9.9316.3444</span>
        </div>

        <div className="card">
          <div className="card__icon">
            <MdLocationOn color="#fff" size={30} />
          </div>
          <strong>Localização</strong>

          <span>
            <MdLocationOn color="#f26425" size={25} /> Av. Margarita, 2660, Loja
            04 - Centro <br /> Comercial Alaidistania
          </span>

          <span>
            <MdLocationOn color="#f26425" size={25} /> Nova Cidade - 69097-305{' '}
            <br />
            Manaus - Amazonas - Brasil
          </span>
        </div>

        <div className="card">
          <div className="card__icon">
            <MdPhonelink color="#fff" size={30} />
          </div>
          <strong>#Siga-nos</strong>

          <span>
            <FaFacebookSquare color="#f26425" size={25} />
            <a href="https://www.facebook.com/fibernetwork.com.br/">
              /fibernetwork
            </a>
          </span>

          <span>
            <FaInstagram color="#f26425" size={25} />
            <a href="https://www.instagram.com/fiber_network_/">
              /fiber_network_
            </a>
          </span>

          <span>
            <MdEmail color="#f26425" size={25} />
            <a href="mailto:sac@fibernetwork.com.br">sac@fibernetwork.com.br</a>
          </span>
        </div>
      </section>

      <section className="section-formContato">
        <Form onSubmit={() => {}} className="form">
          <div className="section-contato__text-box mb-small">
            <h2>Dados Pessoais</h2>
          </div>

          <div className="form__group">
            <Input
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

          <div className="form__group">
            <Input
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

          <div className="form__group">
            <Input
              placeholder="(xx) x xxxx.xxxx"
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

          <div className="form__group">
            <Input
              type="text"
              className="form__input"
              placeholder="Digite a sua mensagem..."
              id="mensagem"
              name="mensagem"
              required
            />
            <label htmlFor="mensagem" className="form__label">
              Mensagem
            </label>
          </div>

          <div className="form__group">
            <button type="button" className="plan__btnBox btn-orange">
              <span>Enviar sua mensagem</span>
            </button>
          </div>
        </Form>
      </section>
    </>
  );
}
