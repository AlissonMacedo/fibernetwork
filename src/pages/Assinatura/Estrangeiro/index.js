/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Form, Input, Select } from '@rocketseat/unform';
// import { Container } from './styles';

export default function Estrangeiro() {
  const options = [
    { id: 'google', title: 'Google' },
    { id: 'yt', title: 'Youtube' },
    { id: 'face', title: 'Facebook' },
    { id: 'insta', title: 'Instagram' },
    { id: 'site', title: 'Site' },
    { id: 'panfleto', title: 'Panfleto' },
    { id: 'indicacao', title: 'Indicação' },
    { id: 'outdoor', title: 'Outdoor' },
    { id: 'carro', title: 'Carro de som' },
    { id: 'tenda', title: 'Tenda' },
    { id: 'loja', title: 'Loja' },
  ];

  return (
    <Form onSubmit={() => {}} className="form">
      <div className="section-contato__text-box mb-small">
        <h1>Dados Pessoais</h1>
      </div>

      {/**
       * Dados Pessoais
       */}

      <div className="form-box">
        <div className="form__group group-width">
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

        <div className="form__group group-width">
          <select
            type="text"
            className="form__input"
            id="sexo"
            name="sexo"
            required
          >
            <option>M</option>
            <option>F</option>
          </select>
          <label htmlFor="sexo" className="form__label">
            Sexo
          </label>
        </div>

        <div className="form__group group-width">
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

        <div className="form__group group-width">
          <Input
            type="email"
            className="form__input"
            placeholder="Seu email opcional"
            id="emailOpcional"
            name="emailOpcional"
          />
          <label htmlFor="emailOpcional" className="form__label">
            Email (Opcional)
          </label>
        </div>
      </div>

      <div className="form-box">
        <div className="form__group group-width">
          <Input
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

        <div className="form__group group-width">
          <Input
            type="text"
            className="form__input"
            id="telefoneOpcional"
            name="telefoneOpcional"
            required
          />
          <label htmlFor="telefoneOpcional" className="form__label">
            Telefone (Opcional)
          </label>
        </div>

        <div className="form__group group-width">
          <Input
            type="date"
            className="form__input"
            id="dataNascimento"
            name="dataNascimento"
            required
          />
          <label htmlFor="dataNascimento" className="form__label">
            Data de Nascimento
          </label>
        </div>

        <div className="form__group group-width">
          <Input
            type="text"
            className="form__input"
            id="passaporte"
            name="passaporte"
            required
          />
          <label htmlFor="passaporte" className="form__label">
            Passaporte
          </label>
        </div>
      </div>

      {/**
       * Plano Selecionado
       */}

      <div className="section-contato__text-box mb-small mt-middle">
        <h1>Plano selecionado:</h1>
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

        <div className="form__group group-width">
          <select className="form__input" id="plano" name="plano" required>
            <option>Cartão de Crédito à vista</option>
            <option>Cartão de Débito</option>
            <option>Dinheiro</option>
          </select>
          <label htmlFor="plano" className="form__label">
            Tarifa de Instalação
          </label>
        </div>

        <div className="form__group group-width">
          <select className="form__input" id="plano" name="plano" required>
            <option>Vencimento no dia 01</option>
            <option>Vencimento no dia 06</option>
            <option>Vencimento no dia 11</option>
            <option>Vencimento no dia 17</option>
            <option>Vencimento no dia 22</option>
            <option>Vencimento no dia 27</option>
          </select>
          <label htmlFor="plano" className="form__label">
            Data de Vencimento
          </label>
        </div>
      </div>

      {/**
       * Endereco para instalacao
       */}

      <div className="section-contato__text-box mt-small mb-small mt-middle">
        <h1>Endereço para instalação</h1>
      </div>

      <div className="form-box">
        <div className="form__group group-width">
          <Input
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
          <Input
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
          <Input
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

        <div className="form__group group-width">
          <Input
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
      </div>

      <div className="form-box">
        <div className="form__group group-width">
          <Input
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

        <div className="form__group group-width">
          <Input
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

        <div className="form__group group-width">
          <Input
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
      </div>

      <div className="form-box">
        <div className="form__group group-width">
          <Select
            className="form__input"
            placeholder="Como conheceu nossa empresa"
            id="sobre"
            name="sobre"
            options={options}
          />

          <label htmlFor="sobre" className="form__label">
            Como Conheceu nossa empresa
          </label>
        </div>

        <div className="form__group group-width">
          <textarea
            type="text"
            className="form__input"
            placeholder="Sua mensagem"
            id="mensage"
            name="mensagem"
            required
          />
          <label htmlFor="mensagem" className="form__label">
            Mensagem
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
    </Form>
  );
}
