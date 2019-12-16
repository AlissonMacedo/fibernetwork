import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function AreaCliente() {
  return (
    <>
      <Header />
      <section className="intro-areaCliente">
        <p>Falta pouco!</p>
        <span className="intro-areaCliente__description">
          Escolha uma das opções abaixo e preencha o formulário, que a nosso
          equipe entrará em contato.
        </span>
      </section>
      <Footer />
    </>
  );
}
