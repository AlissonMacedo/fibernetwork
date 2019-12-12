import styled from 'styled-components';

export const Container = styled.div``;

export const Dropdown = styled.ul`
  display: none !important;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 1rem;
  padding: 1.5rem;
  position: absolute;
  margin-top: 8.5rem;
  color: #999;
  transition: ease-in 3s;

  & a {
    margin-left: 1rem;
  }

  & li {
    padding: 1rem;
    color: #666;
    font-size: 1.2rem;
    font-weight: 400;
    transition: all 0.5s cubic-bezier(0.42, 0, 0.35, 0.78);

    &:hover {
      background-color: rgba(242, 100, 37, 0.1);
      border-radius: 0.5rem;
      cursor: pointer;
      color: #f26425;
    }
  }
`;
