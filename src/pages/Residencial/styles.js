import styled from 'styled-components';

import background from '../../assets/img/residencial.png';

export const Presentation = styled.section`
  background-image: url(${background});
  background-size: cover;
  height: 100%;
  background-position: center;

  @media (max-width: 56.25em) {
    background: #f26425;
    background: -webkit-linear-gradient(to right, #f26425, #ed8f03);
    background: linear-gradient(to right, #f26425, #ed8f03);
    height: 80%;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Container = styled.div`
  max-width: 1000px;
  margin: 0px auto;
  padding: 6rem;
`;
