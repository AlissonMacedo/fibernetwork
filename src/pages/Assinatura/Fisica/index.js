/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { Form, Input, Select } from '@rocketseat/unform';
import * as Yup from 'yup';
import axios from 'axios';

import InputTeste from '../../../components/Input';
import Valida from '../../../utils/validaCpf';

export default function Fisica() {
  const schema = Yup.object().shape({
    nome: Yup.string().required('O nome é obrigatório'),
    sexo: Yup.string().required('O sexo é obrigatório'),
    email: Yup.string()
      .email('Insira um e-mail válido')
      .required('O e-mail é obrigatório'),
    emailOpcional: Yup.string().email('Insira um e-mail válido'),
    telefone: Yup.string().required('O telefone principal é obrigatório'),
    telefoneOpcional: Yup.string(),
    dataNascimento: Yup.string().required('Informe a sua data de nascimento'),
    estadoCivil: Yup.string().required('Informe seu estado civil'),
    nomeConjuge: Yup.string(),
    cpf: Yup.string()
      .length(14, 'O CPF deverá conter somente 11 caracteres')
      .required('O CPF é obrigatório'),
    rg: Yup.string()
      .max(14)
      .required('O RG é obrigatório'),
    orgExpeditor: Yup.string()
      .uppercase()
      .required('Informe qual o orgão expeditor'),
    planoResidencial: Yup.string().required(),
    taxa: Yup.string().required('Selecione a sua forma de pagamento'),
    dataVencimento: Yup.string().required('Seleciona o dia do vencimento'),
    cep: Yup.string().required('Informe o ceu CEP'),
    endereco: Yup.string().required('Informe o seu endereço'),
    complemento: Yup.string().required('Informe o complemento do seu endereço'),
    numero: Yup.string().required('Informe o número'),
    bairro: Yup.string().required('Informe o seu bairro'),
    cidade: Yup.string().required('Informe a sua cidade'),
    estado: Yup.string().required('informe o seu Estado'),
    sobre: Yup.string().required('Informe como você nos conheceu'),
    mensagem: Yup.string(),
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
    { id: 'Cartão de Crédito à vista', title: 'Cartão de Crédito à vista' },
    { id: 'Cartão de Débito', title: 'Cartão de Débito' },
    { id: 'Dinheiro', title: 'Dinheiro' },
  ];

  const estCivil = [
    { id: 'Casado(a)', title: 'Casado(a)' },
    { id: 'Solteiro(a)', title: 'Solteiro(a)' },
    { id: 'Divorciado(a)', title: 'Divorciado(a)' },
    { id: 'Viúvo(a)', title: 'Viúvo(a)' },
  ];

  const plano = [
    {
      id: 'Banda Larga Residencial - 50 MB',
      title: 'Banda Larga Residencial - 50 MB',
    },
    {
      id: 'Banda Larga Residencial - 100 MB',
      title: 'Banda Larga Residencial - 100 MB',
    },
    {
      id: 'Banda Larga Residencial - 200 MB',
      title: 'Banda Larga Residencial - 200 MB',
    },
    {
      id: 'Banda Larga Residencial - 300 MB',
      title: 'Banda Larga Residencial - 300 MB',
    },
  ];

  const sexo = [
    { id: 'Masculino', title: 'Masculino' },
    { id: 'Feminino', title: 'Feminino' },
  ];

  const [checkCpf, setCheckCpf] = useState('');
  const [cep, setCep] = useState('');

  const [dataCep, setDataCep] = useState({});

  const [estadoCivil, setEstadoCivil] = useState('');

  useEffect(() => {
    async function loadCep() {
      if (cep.length === 8) {
        const response = await axios.get(
          `https://viacep.com.br/ws/${cep}/json/`
        );

        setDataCep(response.data);
      }
    }
    loadCep();
  }, [cep]);

  function handleCheckCpf(e) {
    const response = Valida(e.target.value);
    setCheckCpf(response);
  }

  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <Form schema={schema} onSubmit={handleSubmit} className="form">
      <div className="section-contato__text-box mb-small">
        <h1>Dados Pessoais</h1>
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
          <Select
            className="form__input"
            placeholder="Sexo"
            id="sexo"
            name="sexo"
            options={sexo}
          />
        </div>

        <div className="form__group group-width">
          <Input
            type="email"
            className="form__input"
            placeholder="Email 1"
            id="email"
            name="email"
          />
        </div>

        <div className="form__group group-width">
          <Input
            type="email"
            className="form__input"
            placeholder="Email 2 (Opcional)"
            id="emailOpcional"
            name="emailOpcional"
          />
        </div>
      </div>

      <div className="form-box">
        <div className="form__group group-width">
          <InputTeste
            type="text"
            className="form__input"
            placeholder="Telefone 1"
            id="telefone"
            name="telefone"
            mask="(99) 9.9999-9999"
          />
        </div>

        <div className="form__group group-width">
          <InputTeste
            type="text"
            className="form__input"
            placeholder="Telefone 2 (Opcional)"
            id="telefoneOpcional"
            name="telefoneOpcional"
            mask="(99) 9.9999-9999"
          />
        </div>

        <div className="form__group group-width">
          <InputTeste
            type="text"
            className="form__input"
            placeholder="Data de Nascimento"
            id="dataNascimento"
            name="dataNascimento"
            mask="99/99/9999"
          />
        </div>

        <div className="form__group group-width">
          <Select
            className="form__input"
            placeholder="Estado Civil"
            id="estadoCivil"
            name="estadoCivil"
            options={estCivil}
            onChange={e => setEstadoCivil(e.target.value)}
          />
        </div>

        {estadoCivil === 'Casado(a)' ? (
          <div className="form__group group-width">
            <Input
              className="form__input"
              placeholder="Nome Cônjuge"
              id="nomeConjuge"
              name="nomeConjuge"
            />
          </div>
        ) : null}
      </div>

      <div className="form-box">
        <div className="form__group group-width">
          <InputTeste
            type="text"
            className="form__input"
            placeholder="CPF"
            id="cpf"
            name="cpf"
            onChange={handleCheckCpf}
            mask="999.999.999-99"
          />
          <br />
          <span>{checkCpf}</span>
        </div>

        <div className="form__group group-width">
          <Input
            type="number"
            className="form__input"
            placeholder="Rg"
            id="rg"
            name="rg"
            maxLength="14"
          />
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
            placeholder="Seu plano residencial"
            id="planoResidencial"
            name="planoResidencial"
            options={plano}
          />
        </div>

        <div className="form__group group-width">
          <Select
            className="form__input"
            placeholder="Tarifa de Instalação"
            id="taxa"
            name="taxa"
            options={taxa}
          />
        </div>

        <div className="form__group group-width">
          <Select
            className="form__input"
            placeholder="Data de Vencimento"
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
          <InputTeste
            placeholder="CEP"
            type="number"
            className="form__input"
            id="cep"
            name="cep"
            onChange={e => setCep(e.target.value)}
            maxLength="8"
          />
        </div>

        <div className="form__group group-width">
          <Input
            type="text"
            className="form__input"
            placeholder="Rua, Av."
            id="endereco"
            name="endereco"
            value={dataCep.logradouro || ''}
            onChange={() => {}}
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

        <div className="form__group group-width">
          <Input
            type="text"
            className="form__input"
            placeholder="Bairro"
            id="bairro"
            name="bairro"
            value={dataCep.bairro || ''}
            onChange={() => {}}
          />
        </div>
      </div>

      <div className="form-box">
        <div className="form__group group-width">
          <Input
            type="text"
            className="form__input"
            placeholder="Cidade"
            id="cidade"
            name="cidade"
            value={dataCep.localidade || ''}
            onChange={() => {}}
          />
        </div>

        <div className="form__group group-width">
          <Input
            type="text"
            className="form__input"
            placeholder="Estado"
            id="estado"
            name="estado"
            value={dataCep.uf || ''}
            onChange={() => {}}
          />
        </div>

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
