import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  height: 100px;
  background-color: red;
  width: 100%;
`;

const Nav = styled.div``;

const IconMenu = styled.div`
  width: 48px;
  height: 48px;
  z-index: 8;
  top: 25px;
  right: 20px;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.6s ease;
  color: #172315;
  background: transparent;
  cursor: crosshair;
  font-style: normal;

  &:hover {
    transition: all 0.6s ease;
    color: #d32969;
  }

  span {
    display: flex;
    width: 28px;
    height: 2px;
    background-color: #000000;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.4s 0.2s ease;
    &:before,
    &:after {
      position: absolute;
      width: 28px;
      height: 2px;
      content: "";
      background-color: #000000;
      transform-origin: center;
    }
    &:before {
      transition: all 0.3s ease;
      top: 14px;
    }
    &:after {
      bottom: 14px;
      transition: all 0.3s ease;
    }
    &:hover span:before {
      top: 12px;
    }
    &:hover span:after {
      bottom: 12px;
    }
  }
`;

const Header = () => {
  const item = {
    initial: { y: 800 },
    animate: {
      y: 0,
      transition: {
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  };
  return (
    <Wrapper>
      <p>Capsicon Studio</p>
      <Nav>
        <IconMenu>
          <span></span>
        </IconMenu>

        <div class='main-nav'>
          <div class='menu'>
            <div class='menu-items'>
              <a href='#arrow_learn' class='item'>
                about
              </a>
              <a href='#portfolio' class='item'>
                projects
              </a>
              <a href='#contact' class='item'>
                contact
              </a>
            </div>
          </div>
        </div>
      </Nav>
    </Wrapper>
  );
};

export default Header;
