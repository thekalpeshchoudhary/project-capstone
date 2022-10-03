import styled from "styled-components";

export const AuthenticationContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin: 30px auto;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;
