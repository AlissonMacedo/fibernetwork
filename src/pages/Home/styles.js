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

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  p {
    color: #fff;
    font-size: 3.4rem;

    @media (max-width: 768px) {
      font-size: 2rem;
      padding: 0 5rem;
    }
  }

  strong {
    color: #f26425;
  }

  .banner__contato {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      }
    }

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
