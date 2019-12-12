import React, { useState } from 'react';

import { IoMdCheckmark, IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { FaConnectdevelop } from 'react-icons/fa';
import { MdWatchLater, MdApps, MdDevices } from 'react-icons/md';
import {
  AiOutlineCloudServer,
  AiOutlineCloudDownload,
  AiOutlineCloudUpload,
  AiOutlineClockCircle,
  AiOutlineLineChart,
} from 'react-icons/ai';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Presentation } from './styles';

export default function Residencial() {
  const [planos, setPlanos] = useState([
    {
      id: 1,
      plano: 50,
      download: 50,
      upload: 20,
    },
    {
      id: 2,
      plano: 100,
      download: 100,
      upload: 20,
    },
    {
      id: 3,
      plano: 200,
      download: 200,
      upload: 20,
    },
    {
      id: 4,
      plano: 300,
      download: 300,
      upload: 20,
    },
  ]);

  const planosRes = [
    {
      id: 1,
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
      plano: 300,
      download: 300,
      upload: 120,
      feature1: 'Garantia de 40%',
      feature2: 'SLA: 2 dias úteis',
      feature3: 'IP: NAT / Público Dinâmico',
      feature4: 'Franquia 1200 GB',
    },
  ];

  const planosEmp = [
    {
      id: 1,
      plano: 20,
      download: 50,
      upload: 20,
    },
    {
      id: 2,
      plano: 50,
      download: 100,
      upload: 20,
    },
    {
      id: 3,
      plano: 100,
      download: 200,
      upload: 20,
    },
  ];

  // function handlePlanoResidencial() {
  //   setPlanos(planosRes);
  // }

  // function handlePlanoEmpresarial() {
  //   setPlanos(planosEmp);
  // }
  return (
    <>
      <Header />

      <Presentation />

      <section className="vantagens-residencial swing-in-top-fwd">
        <h1>Benefícios</h1>
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
            <div key={p.id} className="card-plan-2 card-plan-2__white">
              <div className="card-plan-2__text">
                <h1>{p.plano}</h1>
                <span>MEGA</span>
              </div>

              <ul>
                <li>
                  <AiOutlineCloudDownload color="#fff" size={26} />
                  <span>{p.download} MB download</span>
                </li>

                <li>
                  <AiOutlineCloudUpload color="#fff" size={26} />
                  <span>{p.upload} MB upload</span>
                </li>

                <li>
                  <IoMdCheckmark color="#fff" size={26} />
                  <span>{p.feature1}</span>
                </li>

                <li>
                  <AiOutlineClockCircle color="#fff" size={26} />
                  <span>{p.feature2}</span>
                </li>

                <li>
                  <MdDevices color="#fff" size={26} />
                  <span>{p.feature3}</span>
                </li>

                <li>
                  <AiOutlineLineChart color="#fff" size={26} />
                  <span>{p.feature4}</span>
                </li>

                <button
                  type="button"
                  onClick={() => {}}
                  className="plan__btnBox btn-white mt-small"
                >
                  <span>Assinar</span>
                </button>
              </ul>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
