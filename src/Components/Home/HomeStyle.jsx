import styled from "styled-components";

export const HomeStyle = styled.main`
  padding: 5% 0 0 10.5%;
  display: flex;

  section {
    width: 950px;

    figure {
      display: flex;
      padding-top: 30%;
      justify-content: right;
      gap: 33px;
      position: relative;
      bottom: 120px;
      left: 70px;

      .copinho-amarelo:hover,
      .copinho-vermelho:hover,
      .copinho-laranja:hover {
        transform: rotate(10deg) translateY(-10px);
      }
    }
  }
  h1 {
    color: #000000ce;
    font-size: 4.5em;
    font-weight: 400;
    font-family: "Inter", sans-serif;
  }

  h2 {
    font-family: "Poppins", sans-serif;
    font-size: 4.5em;
    font-weight: 400;
    word-spacing: 24px;

    span {
      font-weight: 700;
      font-size: 1.5em;
      color: #037143;
    }
  }

  p {
    font-size: 2em;
    line-height: 36px;
    width: 890px;
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
    margin-top: 25px;
  }

  .section2 {
    position: relative;
    left: 250px;
    top: 170px;

    :first-child {
      position: absolute;
      left: 100px;
      top: -80px;
      width: 500px;
      height: 550px;
    }
    :last-child {
      width: 701px;
      height: 620px;
    }
  }
`;
