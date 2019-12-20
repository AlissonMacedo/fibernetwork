import styled from 'styled-components';

import background from '../../assets/img/residencial.png';

export const Presentation = styled.section`
  background-image: url(${background});
  background-size: cover;
  height: 100%;
  background-position: center;

  @media (max-width: 768px) {
    background: #f26425;
    background: -webkit-linear-gradient(
      to right,
      #f26425,
      #ed8f03
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #f26425,
      #ed8f03
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    height: 80%;
  }
`;

export const Container = styled.div`
  max-width: 1000px;
  margin: 0px auto;
  padding: 6rem;
`;
