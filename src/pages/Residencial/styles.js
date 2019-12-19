import styled from 'styled-components';

import background from '../../assets/img/residencial.png';

export const Presentation = styled.section`
  background-image: url(${background});
  background-size: cover;
  height: 100%;
  background-position: center;

  @media (max-width: 768px) {
    height: 80%;
  }
`;

export const Container = styled.div`
  max-width: 1000px;
  margin: 0px auto;
  padding: 6rem;
`;
