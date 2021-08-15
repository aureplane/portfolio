import React, { useEffect } from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const Wrapper = styled.div``;

const ticker = keyframes`
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  `;

// const StickyBarThree = styled.div`
//   font-family: SofiaPro, sans-serif;
//   cursor: url("//cdn.shopify.com/s/files/1/0379/7669/t/40/assets/cursor_sm.svg?v=145887147987634781")
//       16 16,
//     auto;
//   -webkit-text-size-adjust: 100%;
//   text-transform: uppercase;
//   letter-spacing: 0.1em;
//   position: sticky;
//   max-width: 100vw;
//   height: 23px;
//   bottom: 0;
//   background-color: #ead6b6;
//   z-index: 99;
//   font-size: 13px;
//   font-weight: 600;
//   padding-left: 20px;
//   display: flex;
//   align-items: center;
//   div {
//     transform: translateY(-1px);
//   }
// `;

const StickyBar = styled.div`
  text-align: center;
  font-family: SofiaPro, sans-serif;
  ${
    "" /* cursor: url("//cdn.shopify.com/s/files/1/0379/7669/t/40/assets/cursor_sm.svg?v=145887147987634781")
      16 16,
    auto; */
  }
  -webkit-text-size-adjust: 100%;
  box-sizing: border-box;
  -webkit-font-smoothing: subpixel-antialiased;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  position: sticky;
  height: 23px;
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

const ContainerText = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  margin-right: 15%;
`;

const Text = styled(motion.h2)`
  width: 40%;
  font-size: 40px;
  color: black;
  margin-left: 320px;
`;

const AboutMe = styled.div`
  position: relative;
  padding-bottom: 200px;
`;

const TitleAboutMe = styled.h2`
  transform: rotate(-90deg);
  position: absolute;
  left: 00px;
  font-size: 45px;
  top: 45px;
  margin-left: 100px;
`;
const PhotoAndText = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 100px 200px 0 200px;
  width: 70%;
`;
const TextAboutMe = styled.div`
  width: 350px;
  margin-top: 10px;
  padding-left: 150px;
`;
const PhotoAboutMe = styled.div`
  width: 40%;
  img {
    width: 800px;
  }
`;

const Services = () => {
  const animation = useAnimation();
  const [contentRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-200px",
  });

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);

  return (
    <Wrapper>
      <ContainerText
        ref={contentRef}
        animate={animation}
        initial='hidden'
        variants={{
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: [0.6, 0.05, -0.01, 0.9] },
          },
          hidden: { opacity: 0, y: 90 },
        }}
      >
        <Text>
          Websites Design and Development & Digital Strategy. I help companies,
          brands and entrepreneurs share their stories and build the best online
          version of themselves.
        </Text>
      </ContainerText>
      <AboutMe>
        <TitleAboutMe>About Me</TitleAboutMe>
        <PhotoAndText>
          <TextAboutMe>
            I'm an Amsterdam based French web designer & developer. Specialized
            in the development of websites from A to Z but also in digital
            marketing, I help companies, brands and entrepreneurs share their
            stories and build the best online version of themselves. Elegantly
            designed, working on every device, interactive, providing a great
            user experience, made with love and aiming for success... This is my
            vision of an amazing website and I always go for THAT! I work with
            clients worldwide. Get in touch!
          </TextAboutMe>
          <PhotoAboutMe>
            <img src='./aureliee.JPG' />
          </PhotoAboutMe>
        </PhotoAndText>
      </AboutMe>
      {/* <StickyBarThree>
        <div>
          <span class='ticker__text'>
            Made in Amsterdam. With a french touch.
          </span>
        </div>
      </StickyBarThree> */}
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
    </Wrapper>
  );
};

export default Services;
