import styled from 'styled-components';
// import background from '../../assets/img/business-vector.png';

export const Presentation = styled.section`
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
  background-size: cover;
  height: 100%;
  background-position: center;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  img {
    height: 45rem;
    margin: 0 10rem;
  }
`;
