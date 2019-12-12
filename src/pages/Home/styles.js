import styled from 'styled-components';

import banner from '../../assets/img/banner-1_blur.jpg';

export const Banner = styled.section`
  background-image: url(${banner});
  background-size: cover;
  height: 45%;
  background-position: bottom;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  p {
    color: #fff;
    font-size: 3.4rem;
  }

  strong {
    color: #f26425;
  }

  .banner__contato {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    span {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    h2 {
      color: #fff;
      text-align: left;
      font-size: 3rem;
    }
  }
`;
