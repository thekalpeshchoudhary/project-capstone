import styled from "styled-components";

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  
  @media screen and (max-width: 800px) {
    border-top: 1px solid gray;
    padding-top: 25px;
    margin-top: 25px;
  }
`;
export const FormTitle = styled.h2`
  margin: 10px 0;
`;
