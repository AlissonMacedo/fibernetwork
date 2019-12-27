/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { Form, Input, Select } from '@rocketseat/unform';
import * as Yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';

import api from '../../../services/api';

import InputTeste from '../../../components/Input';

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
    passaporte: Yup.string().required('O Passaporte é obrigatório'),
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
    { id: 'Vencimento no dia 01', title: 'Vencimento no dia 01' },
    { id: 'Vencimento no dia 06', title: 'Vencimento no dia 06' },
    { id: 'Vencimento no dia 11', title: 'Vencimento no dia 11' },
    { id: 'Vencimento no dia 17', title: 'Vencimento no dia 17' },
    { id: 'Vencimento no dia 22', title: 'Vencimento no dia 22' },
    { id: 'Vencimento no dia 27', title: 'Vencimento no dia 27' },
  ];

  const taxa = [
    { id: 'credito', title: 'Cartão de Crédito à vista' },
    { id: 'debito', title: 'Cartão de Débito' },
    { id: 'dinheiro', title: 'Dinheiro' },
  ];

  const plano = [
    { id: 'Plano Residencial - 50 MB', title: 'Plano Residencial - 50 MB' },
    { id: 'Plano Residencial - 100 MB', title: 'Plano Residencial - 100 MB' },
    { id: 'Plano Residencial - 200 MB', title: 'Plano Residencial - 200 MB' },
    { id: 'Plano Residencial - 300 MB', title: 'Plano Residencial - 300 MB' },
  ];

  const sexo = [
    { id: 'Masculino', title: 'Masculino' },
    { id: 'Feminino', title: 'Feminino' },
  ];

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

  async function handleSubmit(data) {
    try {
      await api.post('formPE', {
        nome: data.nome,
        sexo: data.sexo,
        email: data.email,
        emailOpcional: data.emailOpcional,
        telefone: data.telefone,
        telefoneOpcional: data.telefoneOpcional,
        dataNascimento: data.dataNascimento,
        passaporte: data.passaporte,
        planoResidencial: data.planoResidencial,
        taxa: data.taxa,
        dataVencimento: data.dataVencimento,
        cep: data.cep,
        endereco: data.endereco,
        numero: data.numero,
        complemento: data.complemento,
        bairro: data.bairro,
        cidade: data.cidade,
        estado: data.estado,
        sobre: data.sobre,
        mensagem: data.mensagem,
      });

      toast.success('Sua mensagem foi enviado com sucesso.');
    } catch (error) {
      toast.error('Ops! Houve um problema no momento do envio.');
    }
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
          <Input
            type="text"
            className="form__input"
            placeholder="Passaporte"
            id="passaporte"
            name="passaporte"
            maxLength="14"
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
          <Input
            multiline
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
