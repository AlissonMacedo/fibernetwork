/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { Form, Input, Select } from '@rocketseat/unform';
import * as Yup from 'yup';
import axios from 'axios';

import InputTeste from '../../../components/Input';
import validarCNPJ from '../../../utils/ValidaCnpj';

export default function Fisica() {
  const schema = Yup.object().shape({
    razaoSocial: Yup.string().required('Informe a razão social'),
    nomeFantasia: Yup.string().required('O nome fantasia é obrigatório'),
    nomeRepresentante: Yup.string().required(
      'O nome do representante é obrigatório'
    ),
    email: Yup.string()
      .email('Insira um e-mail válido')
      .required('O e-mail é obrigatório'),
    emailOpcional: Yup.string().email('Insira um e-mail válido'),
    telefone: Yup.string().required('O telefone principal é obrigatório'),
    telefoneOpcional: Yup.string(),
    dataFundacao: Yup.string().required('Informe a sua data de fundação'),
    cnpj: Yup.string().required('O CNPJ é obrigatório'),
    inscEstadual: Yup.string().required('Informe sua inscrição estadual'),
    inscMunicipal: Yup.string().required('Informe sua inscrição municipal'),
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
    { id: 'Google', title: 'Google' },
    { id: 'Youtube', title: 'Youtube' },
    { id: 'Facebook', title: 'Facebook' },
    { id: 'Instagram', title: 'Instagram' },
    { id: 'Site', title: 'Site' },
    { id: 'Panfleto', title: 'Panfleto' },
    { id: 'Indicação', title: 'Indicação' },
    { id: 'Outdoor', title: 'Outdoor' },
    { id: 'Carro de som', title: 'Carro de som' },
    { id: 'Tenda', title: 'Tenda' },
    { id: 'Loja', title: 'Loja' },
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
    {
      id: 'Banda Larga Empresarial - 20 MB',
      title: 'Banda Larga Empresarial - 20 MB',
    },
    {
      id: 'Banda Larga Empresarial - 50 MB',
      title: 'Banda Larga Empresarial - 50 MB',
    },
    {
      id: 'Banda Larga Empresarial - 100 MB',
      title: 'Banda Larga Empresarial - 100 MB',
    },
  ];

  const [checkCnpj, setCheckCnpj] = useState('');
  const [cep, setCep] = useState('');

  const [dataCep, setDataCep] = useState({});

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

  function handleCheckCnpj(e) {
    const response = validarCNPJ(e.target.value);
    setCheckCnpj(response);
  }

  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <>
      <section className="intro-assinatura">
        <p>Falta pouco!</p>
        <span className="intro-assinatura__description">
          Preencha o formulário, que a nosso equipe entrará em contato.
        </span>
      </section>
      <Form schema={schema} onSubmit={handleSubmit} className="form">
        <div className="section-contato__text-box mb-small">
          <h1>Dados Pessoais</h1>
        </div>

        <div className="form-box">
          <div className="form__group group-width">
            <Input
              type="text"
              className="form__input"
              placeholder="Razão Social"
              id="razaoSocial"
              name="razaoSocial"
            />
          </div>

          <div className="form__group group-width">
            <Input
              type="text"
              className="form__input"
              placeholder="Nome Fantasia"
              id="nomeFantasia"
              name="nomeFantasia"
            />
          </div>
          <div className="form__group group-width">
            <Input
              type="text"
              className="form__input"
              placeholder="Nome do Representante"
              id="nomeRepresentante"
              name="nomeRepresentante"
            />
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
              placeholder="Email opcional"
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
              placeholder="Seu Telefone principal"
              id="telefone"
              name="telefone"
              mask="(99) 9.9999-9999"
            />
          </div>

          <div className="form__group group-width">
            <InputTeste
              type="text"
              className="form__input"
              placeholder="Seu Telefone (Opcional)"
              id="telefoneOpcional"
              name="telefoneOpcional"
              mask="(99) 9.9999-9999"
            />
          </div>

          <div className="form__group group-width">
            <InputTeste
              type="text"
              className="form__input"
              placeholder="CNPJ"
              id="cnpj"
              name="cnpj"
              onChange={handleCheckCnpj}
              mask="99.999.999/9999-99"
            />
            <br />
            <span>{checkCnpj}</span>
          </div>

          <div className="form__group group-width">
            <Input
              type="date"
              className="form__input"
              id="dataFundacao"
              name="dataFundacao"
            />
          </div>

          <div className="form__group group-width">
            <Input
              type="text"
              className="form__input"
              placeholder="Inscrição Estadual"
              id="inscEstadual"
              name="inscEstadual"
            />
          </div>

          <div className="form__group group-width">
            <Input
              type="text"
              className="form__input"
              placeholder="Inscrição Municipal"
              id="inscMunicipal"
              name="inscMunicipal"
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
              placeholder="Seu plano Empresarial"
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
            <Input
              placeholder="xxxxx-xxx"
              type="text"
              className="form__input"
              id="cep"
              name="cep"
              onChange={e => setCep(e.target.value)}
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
              placeholder="Estado"
              id="estado"
              name="estado"
              value={dataCep.uf || ''}
              onChange={() => {}}
            />
          </div>

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
    </>
  );
}
