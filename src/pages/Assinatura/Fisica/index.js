/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Form, Input, Select } from '@rocketseat/unform';
// import { Container } from './styles';

export default function Fisica() {
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

  const dataVencimento = [
    { id: 'venc01', title: 'Vencimento no dia 01' },
    { id: 'venc06', title: 'Vencimento no dia 06' },
    { id: 'venc11', title: 'Vencimento no dia 11' },
    { id: 'venc17', title: 'Vencimento no dia 17' },
    { id: 'venc22', title: 'Vencimento no dia 22' },
    { id: 'venc27', title: 'Vencimento no dia 27' },
  ];

  const taxa = [
    { id: 'credito', title: 'Cartão de Crédito à vista' },
    { id: 'debito', title: 'Cartão de Débito' },
    { id: 'dinheiro', title: 'Dinheiro' },
  ];

  const plano = [
    { id: 'plano50', title: 'Plano Residencial - 50 MB' },
    { id: 'plano100', title: 'Plano Residencial - 100 MB' },
    { id: 'plano200', title: 'Plano Residencial - 200 MB' },
    { id: 'plano300', title: 'Plano Residencial - 300 MB' },
  ];

  return (
    <Form onSubmit={() => {}} className="form">
      <div className="section-contato__text-box mb-small">
        <h1>Dados Pessaaaaaoais</h1>
      </div>

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
            placeholder="Nome Completo"
            id="nome"
            name="nome"
            required
          >
            <option>M</option>
            <option>F</option>
          </select>
          <label htmlFor="nome" className="form__label">
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
            id="email"
            name="email"
          />
          <label htmlFor="telefone" className="form__label">
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
            id="telefone"
            name="telefone"
            required
          />
          <label htmlFor="telefone" className="form__label">
            Telefone (Opcional)
          </label>
        </div>

        <div className="form__group group-width">
          <Input
            type="date"
            className="form__input"
            id="telefone"
            name="telefone"
            required
          />
          <label htmlFor="telefone" className="form__label">
            Data de Nascimento
          </label>
        </div>

        <div className="form__group group-width">
          <Input
            type="text"
            className="form__input"
            id="telefone"
            name="telefone"
            required
          />
          <label htmlFor="telefone" className="form__label">
            Estado Civil
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
            Cpf
          </label>
        </div>

        <div className="form__group group-width">
          <Input
            type="text"
            className="form__input"
            id="telefone"
            name="telefone"
            required
          />
          <label htmlFor="telefone" className="form__label">
            RG
          </label>
        </div>

        <div className="form__group group-width">
          <Input
            type="text"
            className="form__input"
            id="telefone"
            name="telefone"
            required
          />
          <label htmlFor="telefone" className="form__label">
            Orgão Expeditor
          </label>
        </div>
      </div>

      <div className="section-contato__text-box mb-small mt-middle">
        <h1>Plano selecionado:</h1>
      </div>

      <div className="form-box">
        <div className="form__group group-width">
          <Select
            className="form__input"
            id="plano"
            name="plano"
            required
            options={plano}
          />
          <label htmlFor="plano" className="form__label">
            veja acima
          </label>
        </div>

        <div className="form__group group-width">
          <Select
            className="form__input"
            id="taxa"
            name="taxa"
            required
            options={taxa}
          />
          <label htmlFor="taxa" className="form__label">
            Tarifa de Instalação
          </label>
        </div>

        <div className="form__group group-width">
          <Select
            className="form__input"
            id="dataVencimento"
            name="dataVencimento"
            required
            options={dataVencimento}
          />
          <label htmlFor="dataVencimento" className="form__label">
            Data de Vencimento
          </label>
        </div>
      </div>

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
            id="endereco"
            name="endereco"
            required
          />
          <label htmlFor="endereco" className="form__label">
            Endereço
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
          <label htmlFor="numero" className="form__label">
            Número
          </label>
        </div>

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
      </div>

      <div className="form-box">
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
            id="cidade"
            name="cidade"
            options={options}
          />

          <label htmlFor="cidade" className="form__label">
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
          <label htmlFor="cidade" className="form__label">
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
