import styled from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 150px;
  padding: 0 10%;
  padding-top: 1%;

  nav {
    width: 500px;
    ul {
      display: flex;
      justify-content: center;
      gap: 50px;
      font-size: 25px;

      li {
        list-style-type: none;
      }

      a {
        text-decoration: none;
        color: #1e3932;
      }
    }
  }

  img {
    width: 100px;
  }
`;
