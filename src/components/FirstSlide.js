import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

import { motion } from "framer-motion";

const ticker = keyframes`
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  `;

const Wrapper = styled.div`
  background-color: #4a6873;
  height: calc(100vh - 32px);
  display: flex;
  ${"" /* justify-content: center; */}
  ${"" /* align-items: center; */}
  cursor: crosshair;
  margin-bottom: 296px;
  position: relative;
`;

const TitleWrapper = styled(motion.h1)`
  position: absolute;
  bottom: 160px;
  left: 330px;
  color: ${(props) => props.theme.text};
  pointer-events: none;
  font-size: 150px;
  line-height: 1;
`;

const BannerTitle = styled(motion.span)`
  display: block;
  color: #df5d6c;
  text-decoration: none;
  ${"" /* font-size: 150px; */}
`;

const StickyBar = styled.div`
  text-align: center;
  font-family: SofiaPro, sans-serif;
  cursor: url("//cdn.shopify.com/s/files/1/0379/7669/t/40/assets/cursor_sm.svg?v=145887147987634781")
      16 16,
    auto;
  -webkit-text-size-adjust: 100%;
  box-sizing: border-box;
  -webkit-font-smoothing: subpixel-antialiased;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  position: sticky;
  height: 23px;
  bottom: 17px;
  background-color: #ead6b6;
  z-index: 99;
  font-size: 13px;
  font-weight: 600;
  overflow: hidden;
  div {
    opacity: 1;
    animation: ticker 5s infinite;
    height: 100%;
    width: max-content;
    animation-name: ${ticker};
    animation-duration: 50s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    display: flex;
    align-items: center;
    span {
      display: inline-block;
      margin-right: 60px;
    }
  }
`;

const StickyBarTwo = styled.div`
  text-align: center;
  font-family: SofiaPro, sans-serif;
  cursor: url("//cdn.shopify.com/s/files/1/0379/7669/t/40/assets/cursor_sm.svg?v=145887147987634781")
      16 16,
    auto;
  -webkit-text-size-adjust: 100%;
  box-sizing: border-box;
  -webkit-font-smoothing: subpixel-antialiased;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  position: sticky;
  width: 100%;
  height: 32px;
`;

const StickyBarThree = styled.div`
  ${"" /* overflow: hidden; */}
  text-align: center;
  font-family: SofiaPro, sans-serif;
  cursor: url("//cdn.shopify.com/s/files/1/0379/7669/t/40/assets/cursor_sm.svg?v=145887147987634781")
      16 16,
    auto;
  -webkit-text-size-adjust: 100%;
  box-sizing: border-box;
  -webkit-font-smoothing: subpixel-antialiased;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  position: sticky;
  max-width: 100vw;
  height: 20px;
  bottom: 0;
  background-color: #ead6b6;
  z-index: 99;
  font-size: 13px;
  font-weight: 600;
  overflow: hidden;
  div {
    opacity: 1;
    animation: ticker 5s infinite;
    height: 100%;
    ${
      "" /* animation-name: ticker;
    animation-duration: 50s;
    animation-timing-function: linear;
    animation-iteration-count: infinite; */
    }
    span {
      display: inline-block;
    }
  }
`;

const StickyBarFour = styled.div`
  ${"" /* overflow: hidden; */}
  text-align: center;
  font-family: SofiaPro, sans-serif;
  cursor: url("//cdn.shopify.com/s/files/1/0379/7669/t/40/assets/cursor_sm.svg?v=145887147987634781")
      16 16,
    auto;
  -webkit-text-size-adjust: 100%;
  box-sizing: border-box;
  -webkit-font-smoothing: subpixel-antialiased;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  position: sticky;
  max-width: 100vw;
  height: 20px;
  bottom: -300px;
  background-color: #ead6b6;
  z-index: 99;
  font-size: 13px;
  font-weight: 600;
  overflow: hidden;
  div {
    opacity: 1;
    animation: ticker 5s infinite;
    height: 100%;
    ${
      "" /* animation-name: ticker;
    animation-duration: 50s;
    animation-timing-function: linear;
    animation-iteration-count: infinite; */
    }
    span {
      display: inline-block;
    }
  }
`;

const FirstSlide = () => {
  const container = {
    initial: { y: 800 },
    animate: {
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
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
    <>
      <Wrapper>
        <TitleWrapper variants={container} initial='initial' animate='animate'>
          <BannerTitle variants={item}>Capsicon</BannerTitle>
          <BannerTitle variants={item}>Studio</BannerTitle>
        </TitleWrapper>
      </Wrapper>
      <StickyBar>
        <div>
          <span class='ticker__text'>
            Made in Amsterdam. With a french touch.
          </span>
          <span class='ticker__text' aria-hidden='true'>
            Made in Amsterdam. With a french touch.
          </span>
          <span class='ticker__text' aria-hidden='true'>
            Made in Amsterdam. With a french touch.
          </span>
          <span class='ticker__text' aria-hidden='true'>
            Made in Amsterdam. With a french touch.
          </span>
          <span class='ticker__text' aria-hidden='true'>
            Made in Amsterdam. With a french touch.
          </span>
          <span class='ticker__text' aria-hidden='true'>
            Made in Amsterdam. With a french touch.
          </span>
          <span class='ticker__text' aria-hidden='true'>
            Made in Amsterdam. With a french touch.
          </span>
          <span class='ticker__text' aria-hidden='true'>
            Made in Amsterdam. With a french touch.
          </span>
        </div>
      </StickyBar>
      {/* <StickyBarTwo>
        <div>
          <span class='ticker__text'>
            ROSE ATLANTIC season is open. Don’t miss out.
          </span>
          <span class='ticker__text' aria-hidden='true'>
            ROSE ATLANTIC season is open. Don’t miss out.
          </span>
          <span class='ticker__text' aria-hidden='true'>
            ROSE ATLANTIC season is open. Don’t miss out.
          </span>
          <span class='ticker__text' aria-hidden='true'>
            ROSE ATLANTIC season is open. Don’t miss out.
          </span>
          <span class='ticker__text' aria-hidden='true'>
            ROSE ATLANTIC season is open. Don’t miss out.
          </span>
          <span class='ticker__text' aria-hidden='true'>
            ROSE ATLANTIC season is open. Don’t miss out.
          </span>
          <span class='ticker__text' aria-hidden='true'>
            ROSE ATLANTIC season is open. Don’t miss out.
          </span>
          <span class='ticker__text' aria-hidden='true'>
            ROSE ATLANTIC season is open. Don’t miss out.
          </span>
        </div>
      </StickyBarTwo>
      <StickyBarThree>
        <div>
          <span class='ticker__text'>
            ROSE ATLANTIC season is open. Don’t miss out.
          </span>
          <span class='ticker__text' aria-hidden='true'>
            ROSE ATLANTIC season is open. Don’t miss out.
          </span>
          <span class='ticker__text' aria-hidden='true'>
            ROSE ATLANTIC season is open. Don’t miss out.
          </span>
          <span class='ticker__text' aria-hidden='true'>
            ROSE ATLANTIC season is open. Don’t miss out.
          </span>
          <span class='ticker__text' aria-hidden='true'>
            ROSE ATLANTIC season is open. Don’t miss out.
          </span>
          <span class='ticker__text' aria-hidden='true'>
            ROSE ATLANTIC season is open. Don’t miss out.
          </span>
          <span class='ticker__text' aria-hidden='true'>
            ROSE ATLANTIC season is open. Don’t miss out.
          </span>
          <span class='ticker__text' aria-hidden='true'>
            ROSE ATLANTIC season is open. Don’t miss out.
          </span>
        </div>
      </StickyBarThree> */}
      {/* <StickyBarFour>
        <div>
          <span class='ticker__text'>
            Four ATLANTIC season is open. Don’t miss out.
          </span>
          <span class='ticker__text' aria-hidden='true'>
            Four ATLANTIC season is open. Don’t miss out.
          </span>
          <span class='ticker__text' aria-hidden='true'>
            Four ATLANTIC season is open. Don’t miss out.
          </span>
          <span class='ticker__text' aria-hidden='true'>
            Four ATLANTIC season is open. Don’t miss out.
          </span>
          <span class='ticker__text' aria-hidden='true'>
            Four ATLANTIC season is open. Don’t miss out.
          </span>
          <span class='ticker__text' aria-hidden='true'>
            Four ATLANTIC season is open. Don’t miss out.
          </span>
          <span class='ticker__text' aria-hidden='true'>
            Four ATLANTIC season is open. Don’t miss out.
          </span>
          <span class='ticker__text' aria-hidden='true'>
            Four ATLANTIC season is open. Don’t miss out.
          </span>
        </div>
      </StickyBarFour> */}
    </>
  );
};

export default FirstSlide;
