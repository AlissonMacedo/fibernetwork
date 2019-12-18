import React, { useState } from 'react';

import { IoMdCheckmark, IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { FaConnectdevelop } from 'react-icons/fa';
import { MdWatchLater, MdApps } from 'react-icons/md';
import { AiOutlineCloudServer, AiOutlineProject } from 'react-icons/ai';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ListPlanos from '../../components/ListPlanos';

import { Presentation } from './styles';

import background from '../../assets/img/business-vector.png';

export default function Empresarial() {
  const planoBandaLarga = [
    {
      id: 1,
      tipo: 'empresarial',
      plano: 20,
      download: 20,
      upload: 10,
      feature1: 'Garantia de 70%',
      feature2: 'SLA: 1 dia útil',
      feature3: 'IP Público Dinâmico',
      feature4: 'Franquia 700 GB',
    },
    {
      id: 2,
      tipo: 'empresarial',
      plano: 50,
      download: 50,
      upload: 25,
      feature1: 'Garantia de 70%',
      feature2: 'SLA: 1 dia útil',
      feature3: 'IP Público Dinâmico',
      feature4: 'Franquia 800 GB',
    },
    {
      id: 3,
      tipo: 'empresarial',
      plano: 100,
      download: 100,
      upload: 50,
      feature1: 'Garantia de 70%',
      feature2: 'SLA: 1 dia útil',
      feature3: 'IP Público Dinâmico',
      feature4: 'Franquia 1000 GB',
    },
  ];

  const vantagemBL = [
    {
      id: 1,
      icon: <IoMdCheckmarkCircleOutline color="#f70" size={60} />,
      title: 'Garantia de 70% da banda contratada',
    },
    {
      id: 2,
      icon: <FaConnectdevelop color="#f70" size={60} />,
      title: 'Conectividade por Fibra Óptica',
    },
    {
      id: 3,
      icon: <MdWatchLater color="#f70" size={60} />,
      title: 'Acordo de Nível de Serviço de 1 dia útil',
    },
    {
      id: 4,
      icon: <MdApps color="#f70" size={60} />,
      title: 'Com franquia com limites de tráfego',
    },
    {
      id: 5,
      icon: <AiOutlineCloudServer color="#f70" size={60} />,
      title: 'Conexão com altas taxas de upload',
    },
    {
      id: 6,
      icon: <IoMdCheckmark color="#f70" size={60} />,
      title: 'Tecnologia FTTH',
    },
  ];

  const vantagemLD = [
    {
      id: 1,
      icon: <IoMdCheckmarkCircleOutline color="#f70" size={60} />,
      title: 'Garantia de 100% da banda contratada',
    },
    {
      id: 2,
      icon: <FaConnectdevelop color="#f70" size={60} />,
      title: 'Conectividade por Fibra Óptica',
    },
    {
      id: 3,
      icon: <MdWatchLater color="#f70" size={60} />,
      title: 'SLA 4hs',
    },
    {
      id: 4,
      icon: <AiOutlineProject color="#f70" size={60} />,
      title: 'Projetos Especiais',
    },
    {
      id: 5,
      icon: <AiOutlineCloudServer color="#f70" size={60} />,
      title: 'Download/Upload simétrico',
    },
    {
      id: 6,
      icon: <IoMdCheckmark color="#f70" size={60} />,
      title: 'Tecnologia MetroEthernet',
    },
  ];

  const [titlePlan, setTitlePlan] = useState('Banda Larga');
  const [vantagens, setVantagens] = useState(vantagemBL);
  const [planosEmp, setPlanosEmp] = useState(planoBandaLarga);

  const [active, setActive] = useState(false);

  const planoLinkDedicado = [
    {
      id: 1,
      tipo: 'empresarial',
      dedicado: 'Planos de 10 MEGA até 1 GIGA',
      download: '100%',
      upload: '100%',
      feature1: 'Garantia de 100%',
      feature2: 'SLA: 4h',
      feature3: 'IP Público Fixo',
      feature4: 'Franquia Ilimitada',
    },
  ];

  function handleBandaLarga() {
    setPlanosEmp(planoBandaLarga);
    setVantagens(vantagemBL);
    setTitlePlan('Banda Larga');
    setActive(!active);
  }

  function handleLinkDedicado() {
    setPlanosEmp(planoLinkDedicado);
    setVantagens(vantagemLD);
    setTitlePlan('Link Dedicado');
    setActive(!active);
  }

  function handleMudaButton() {
    setActive(!active);
    handleBandaLarga();
    handleLinkDedicado();
  }

  return (
    <>
      <Header />

      <Presentation>
        <img className="tilt-in-top-1" src={background} alt="Business" />
      </Presentation>

      <div className="nossos-planos mb-middle tracking-in-expand">
        <h1>Nossos Planos</h1>
        <h2>Empresariais</h2>

        <div className="switch-button mt-small">
          <span className={!active ? 'active' : 'active fide-left'} />
          <button
            type="button"
            onClick={handleMudaButton}
            className={
              active
                ? 'switch-button-case left'
                : 'switch-button-case left active-case'
            }
          >
            <span>Banda Larga</span>
          </button>

          <button
            type="button"
            onClick={handleMudaButton}
            className={
              active
                ? 'switch-button-case right active-case'
                : 'switch-button-case right'
            }
          >
            <span>Link Dedicado</span>
          </button>
        </div>
      </div>
      <section className="vantagens-residencial swing-in-top-fwd">
        <h1>Vantagens</h1>
        <h2>{titlePlan}</h2>

        <div className="vantagens-residencial__content">
          {vantagens.map(item => (
            <div key={item.id} className="vantagens-residencial__card">
              {item.icon}
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="plan">
        <div className="plan__box">
          {planosEmp.map(p => (
            <ListPlanos data={p} key={p.id} />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
