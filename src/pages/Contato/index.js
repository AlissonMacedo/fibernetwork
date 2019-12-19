/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { IoLogoWhatsapp } from 'react-icons/io';
import { MdMail, MdLocationOn, MdGroup, MdPhoneInTalk } from 'react-icons/md';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';

import InputTeste from '../../components/Input';
import contato from '../../assets/img/contato.svg';

export default function Contato() {
  const schema = Yup.object().shape({
    nome: Yup.string().required('Informe o seu nome'),
    email: Yup.string().required('Informe o seu e-mail'),
    telefone: Yup.string().required('Informe o telefone'),
    mensagem: Yup.string().required('Digite a sua mensagem'),
  });

  function handleSubmit(data) {
    console.log(data);
  }

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

          <span>
            <MdPhoneInTalk color="#f26425" size={25} />
            <a href="tel:08008788194">0800 878 8194</a>
          </span>

          <span>
            <MdPhoneInTalk color="#f26425" size={25} />
            <a href="tel:9231991000">92 3199.1000</a>
          </span>

          <span>
            <IoLogoWhatsapp color="#f26425" size={25} />
            <a
              href="https://api.whatsapp.com/send?phone=5592993163444"
              target="_blank"
              rel="noopener noreferrer"
            >
              (92) 9.9316.3444
            </a>
          </span>
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
            <MdPhoneInTalk color="#fff" size={30} />
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
            <MdMail color="#f26425" size={25} />
            <a href="mailto:sac@fibernetwork.com.br">sac@fibernetwork.com.br</a>
          </span>
        </div>
      </section>

      <section className="section-formContato">
        <Form schema={schema} onSubmit={handleSubmit} className="form">
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
            />
          </div>

          <div className="form__group">
            <Input
              type="email"
              className="form__input"
              placeholder="Seu melhor email"
              id="email"
              name="email"
            />
          </div>

          <div className="form__group">
            <InputTeste
              type="text"
              className="form__input"
              placeholder="Telefone 1"
              id="telefone"
              name="telefone"
              mask="(99) 9.9999-9999"
            />
          </div>

          <div className="form__group">
            <Input
              type="text"
              className="form__input"
              placeholder="Digite a sua mensagem..."
              id="mensagem"
              name="mensagem"
            />
          </div>

          <div className="form__group">
            <button type="submit" className="plan__btnBox btn-orange">
              <span>Enviar sua mensagem</span>
            </button>
          </div>
        </Form>
      </section>
    </>
  );
}
