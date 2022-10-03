import styled from "styled-components";

export const ProductCardContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    padding: 0;
    top: 255px;
    display: none;
  }
  &:hover {
    img {
      opacity: 0.8;
    }
    button {
      opacity: 0.85;
      display: flex;
    }
  }

  @media screen and (max-width: 800px) {
    width: 40vw;
    
    button {
      width: 80%;
      opacity: unset;
      position: absolute;
      top: 255px;
      padding: 0 10px;
      display: block;
    }

    &:hover {
      img {
        opacity: unset;
      }
      button {
        opacity: unset;
      }
    }
  }
`;

type ProductImageProp = { imageUrl: string };
export const Product = styled.div<ProductImageProp>`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  
  @media screen and (max-width: 800px) {
    height: 10%;
  }
`;

export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const Price = styled.span`
  width: 10%;
`;
