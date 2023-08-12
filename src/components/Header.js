import React from "react";
import styled from "styled-components";
import mainImage from "../images/main-img.jpg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 35px);

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const ImageWrapper = styled.div`
  img {
    object-fit: cover;
    width: 100%;
    object-position: left top;
  }
  @media (min-width: 1024px) {
    height: calc(100vh - 35px);
    img {
      width: 70vw;
    }
  }
`;

const TextRight = styled.div`
  display: flex;
  flex-direction: column;
  font-family: SofiaPro, sans-serif;
  color: black;
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: subpixel-antialiased;
  text-transform: uppercase;
  padding: 1rem;
  font-size: 25px;
  letter-spacing: 2px;
  h1 {
    margin: 0 0;
    font-size: 35px;
  }
  p {
    font-size: 20px;
  }
  p:nth-of-type(2) {
    margin-top: auto;
    margin-bottom: 0;
  }

  @media (min-width: 1024px) {
    width: 100%;
    h1 {
      font-size: 50px;
    }
  }
`;

const Header = () => {
  return (
    <>
      <Wrapper>
        <ImageWrapper>
          <img src={mainImage} alt='Aurélie Plane, Front-end Developer' />
        </ImageWrapper>
        <TextRight>
          <h1>Aurélie Plane</h1>
          <p>Front-end Developer</p>
          <p>Based in Amsterdam, NL</p>
        </TextRight>
      </Wrapper>
    </>
  );
};

export default Header;
