import React from 'react';

import { IoMdCheckmark, IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { FaConnectdevelop } from 'react-icons/fa';
import { MdWatchLater, MdApps } from 'react-icons/md';
import { AiOutlineCloudServer } from 'react-icons/ai';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ListPlanos from '../../components/ListPlanos';

import { Presentation } from './styles';

export default function Residencial() {
  const planosRes = [
    {
      id: 1,
      tipo: 'residencial',
      plano: 50,
      download: 50,
      upload: 20,
      feature1: 'Garantia de 40%',
      feature2: 'SLA: 2 dias úteis',
      feature3: 'IP: NAT / Público Dinâmico',
      feature4: 'Franquia 800 GB',
    },
    {
      id: 2,
      tipo: 'residencial',
      plano: 100,
      download: 100,
      upload: 40,
      feature1: 'Garantia de 40%',
      feature2: 'SLA: 2 dias úteis',
      feature3: 'IP: NAT / Público Dinâmico',
      feature4: 'Franquia 900 GB',
    },
    {
      id: 3,
      tipo: 'residencial',
      plano: 200,
      download: 200,
      upload: 80,
      feature1: 'Garantia de 40%',
      feature2: 'SLA: 2 dias úteis',
      feature3: 'IP: NAT / Público Dinâmico',
      feature4: 'Franquia 1000 GB',
    },
    {
      id: 4,
      tipo: 'residencial',
      plano: 300,
      download: 300,
      upload: 120,
      feature1: 'Garantia de 40%',
      feature2: 'SLA: 2 dias úteis',
      feature3: 'IP: NAT / Público Dinâmico',
      feature4: 'Franquia 1200 GB',
    },
  ];

  return (
    <>
      <Header />

      <Presentation />

      <section className="vantagens-residencial swing-in-top-fwd mt-12">
        <h1>Vantagens</h1>
        <h2>Banda Larga Residencial</h2>
        <div className="vantagens-residencial__content">
          <div className="vantagens-residencial__card">
            <IoMdCheckmarkCircleOutline color="#f70" size={60} />
            <p>
              Garantia de 40% da <br />
              banda contratada
            </p>
          </div>

          <div className="vantagens-residencial__card">
            <FaConnectdevelop color="#f70" size={60} />
            <p>
              Conectividade por <br />
              Fibra Óptica
            </p>
          </div>

          <div className="vantagens-residencial__card">
            <MdWatchLater color="#f70" size={60} />
            <p>
              Acordo de Nível de Serviço <br />
              de 2 dia úteis
            </p>
          </div>
        </div>

        <div className="vantagens-residencial__content">
          <div className="vantagens-residencial__card">
            <MdApps color="#f70" size={60} />
            <p>
              Com franquia <br />
              (com limites de tráfego)
            </p>
          </div>

          <div className="vantagens-residencial__card">
            <AiOutlineCloudServer color="#f70" size={60} />
            <p>
              Conexão com altas <br />
              taxas de upload
            </p>
          </div>

          <div className="vantagens-residencial__card">
            <IoMdCheckmark color="#f70" size={60} />
            <p>Tecnologia FTTH/FTTB</p>
          </div>
        </div>
      </section>

      <section className="plan mt-big">
        <div className="plan__box">
          {planosRes.map(p => (
            <ListPlanos data={p} key={p.id} />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
