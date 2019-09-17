import styled from 'styled-components';

const Container = styled.div`
  padding: 50px;

  h1 {
    padding-bottom: 20px;
  }

  header {
    input {
      border: 1px solid #868686;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #868686;
      margin: 10px 10px 35px 0;
    }

    button {
      width: 60px;
      height: 44px;
      background: #3b9eff;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }

  li {
    button {
      border: none;
      background: none;
      padding: 8px;

      &:hover {
        border-radius: 4px;
        background: #86868617;
      }
    }
  }
`;

export default Container;
