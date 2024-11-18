import styled from "styled-components";

export const SobreStyle = styled.section`
  padding: 0 10.5% 7% 10.5%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #1e3932;

  div {
    width: 800px;
  }

  h2,
  h4,
  p {
    color: white;
  }

  h2 {
    padding-bottom: 20px;
    font-size: 4.5em;
    font-weight: 400;
  }

  h4 {
    padding-bottom: 20px;
    font-size: 1.5em;
  }

  p {
    font-size: 2.2em;
    font-weight: 200;
    line-height: 50px;
  }

  button {
    border: none;
    background-color: #037143;
    width: 330px;
    height: 60px;
    border-radius: 30px;
    font-size: 1.3em;
    color: white;
    font-weight: 700;
    padding-top: 3px;
    margin-top: 40px;
  }

  img {
    width: 38%;
  }
`;
