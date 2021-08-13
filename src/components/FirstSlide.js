import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  background-color: #4a6873;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: crosshair;
  margin-bottom: 296px;
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
    <Wrapper>
      <TitleWrapper variants={container} initial='initial' animate='animate'>
        <BannerTitle variants={item}>Capsicon</BannerTitle>
        <BannerTitle variants={item}>Studio</BannerTitle>
      </TitleWrapper>
    </Wrapper>
  );
};

export default FirstSlide;
