import React, { useState, useEffect } from 'react';
import ItemsCarousel from 'react-items-carousel';

import { IoMdCheckmark, IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { FaConnectdevelop } from 'react-icons/fa';
import {
  MdWatchLater,
  MdApps,
  MdChevronLeft,
  MdChevronRight,
} from 'react-icons/md';
import { AiOutlineCloudServer } from 'react-icons/ai';

import ListPlanos from '../../components/ListPlanos';

import { Presentation, Container } from './styles';

export default function Residencial() {
  const planosRes = [
    {
      id: 1,
      tipo: 'residencial',
      plano: 50,
      download: 50,
      upload: 20,
      feature1: 'Garantia de 40%',
      feature2: 'SLA 48 horas',
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
      feature2: 'SLA 48 horas',
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
      feature2: 'SLA 48 horas',
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
      feature2: 'SLA 48 horas',
      feature3: 'IP: NAT / Público Dinâmico',
      feature4: 'Franquia 1200 GB',
    },
  ];

  const [activeItemIndex, setActiveItemIndex] = useState(0);

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <>
      <Presentation>
        <div className="nossos-planos-residencial tracking-in-expand">
          <h1>Nossos Planos</h1>
          <h2>Residenciais</h2>
        </div>
      </Presentation>

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
            <p>Acordo de Nível de Serviço de 48 horas</p>
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

      {/* <section className="plan mt-big">
        <div className="plan__box" />
      </section> */}

      <Container>
        <ItemsCarousel
          infiniteLoop={false}
          gutter={width <= 900 ? 80 : 12}
          activePosition="center"
          chevronWidth={60}
          disableSwipe={false}
          alwaysShowChevrons={false}
          numberOfCards={width <= 900 ? 1 : 3}
          slidesToScroll={1}
          outsideChevron
          showSlither={false}
          firstAndLastGutter={false}
          activeItemIndex={activeItemIndex}
          requestToChangeActive={value => setActiveItemIndex(value)}
          rightChevron={<MdChevronRight color="#f26425" size={65} />}
          leftChevron={<MdChevronLeft color="#f26425" size={65} />}
        >
          {planosRes.map(p => (
            <ListPlanos data={p} key={p.id} />
          ))}
        </ItemsCarousel>
      </Container>
    </>
  );
}
