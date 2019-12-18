/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Form, Input, Select } from '@rocketseat/unform';
import * as Yup from 'yup';
// import { Container } from './styles';

export default function Fisica() {
  const schema = Yup.object().shape({
    nome: Yup.string().required('O nome é obrigatório'),
    email: Yup.string()
      .email('Insira um e-mail válido')
      .required('O e-mail é obrigatório'),
    telefone: Yup.string().required('O telefone é obrigatório'),
    cpf: Yup.string().required('O CPF é obrigatório'),
    rg: Yup.string().required('O RG é obrigatório'),
    orgExpeditor: Yup.string().required('Informe qual o orgão expeditor'),
  });

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

  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <Form schema={schema} onSubmit={handleSubmit} className="form">
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
          />
        </div>

        <div className="form__group group-width">
          <select type="text" className="form__input" id="sexo" name="sexo">
            <option>M</option>
            <option>F</option>
          </select>
        </div>

        <div className="form__group group-width">
          <Input
            type="email"
            className="form__input"
            placeholder="Seu melhor email"
            id="email"
            name="email"
          />
        </div>

        <div className="form__group group-width">
          <Input
            type="email"
            className="form__input"
            placeholder="Seu email opcional"
            id="emailOpcional"
            name="emailOpcional"
          />
        </div>
      </div>

      <div className="form-box">
        <div className="form__group group-width">
          <Input
            type="text"
            className="form__input"
            placeholder="Seu Telefone principal"
            id="telefone"
            name="telefone"
          />
        </div>

        <div className="form__group group-width">
          <Input
            type="text"
            className="form__input"
            placeholder="Seu Telefone (Opcional)"
            id="telefoneOpcional"
            name="telefoneOpcional"
          />
        </div>

        <div className="form__group group-width">
          <Input
            type="date"
            className="form__input"
            id="dataNascimento"
            name="dataNascimento"
          />
        </div>

        <div className="form__group group-width">
          <Input
            type="text"
            className="form__input"
            placeholder="Estado Civil"
            id="estadoCivil"
            name="estadoCivil"
          />
        </div>
      </div>

      <div className="form-box">
        <div className="form__group group-width">
          <Input type="text" className="form__input" id="cpf" name="cpf" />
        </div>

        <div className="form__group group-width">
          <Input type="text" className="form__input" id="rg" name="rg" />
        </div>

        <div className="form__group group-width">
          <Input
            type="text"
            className="form__input"
            placeholder="Orgão Expeditor"
            id="orgExpeditor"
            name="orgExpeditor"
          />
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
            options={plano}
          />
        </div>

        <div className="form__group group-width">
          <Select
            className="form__input"
            id="taxa"
            name="taxa"
            options={taxa}
          />
        </div>

        <div className="form__group group-width">
          <Select
            className="form__input"
            id="dataVencimento"
            name="dataVencimento"
            options={dataVencimento}
          />
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
          />
        </div>

        <div className="form__group group-width">
          <Input
            type="text"
            className="form__input"
            placeholder="Rua, Av."
            id="endereco"
            name="endereco"
          />
        </div>

        <div className="form__group group-width">
          <Input
            type="text"
            className="form__input"
            placeholder="Número"
            id="numero"
            name="numero"
          />
        </div>

        <div className="form__group group-width">
          <Input
            type="text"
            className="form__input"
            placeholder="Complemento"
            id="complemento"
            name="complemento"
          />
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
          />
        </div>

        <div className="form__group group-width">
          <Input
            type="text"
            className="form__input"
            placeholder="Estado"
            id="estado"
            name="estado"
          />
        </div>

        <div className="form__group group-width">
          <Input
            type="text"
            className="form__input"
            placeholder="Cidade"
            id="cidade"
            name="cidade"
          />
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
        </div>

        <div className="form__group group-width">
          <textarea
            type="text"
            className="form__input"
            placeholder="Sua mensagem"
            id="mensage"
            name="mensagem"
          />
        </div>
      </div>

      <div className="form-box">
        <div className="form__group">
          <button type="submit" className="btn submit btn-orange">
            Enviar
          </button>
        </div>
      </div>
    </Form>
  );
}
