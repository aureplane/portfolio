import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 400px;
  background-color: #e7bf5f;
  position: relative;
  padding: 25px 0 0 30px;
`;

const Title = styled(motion.h3)`
  text-transform: uppercase;
  margin: 0 auto;
  color: transparent;
  -webkit-text-stroke: 1px white;
  font-size: 60px;
  letter-spacing: 3px;
  margin: 0 auto;
`;

const ContactGrid = styled(motion.div)`
  ${"" /* color: rgba (0, 0, 0, 0.6); */}
  color: white;
  ${"" /* position: absolute; */}
  bottom: 10px;
  display: flex;
  justify-content: flex-end;
  ${"" /* justify-content: space-between; */}
  width: 100%;
  margin-bottom: 5px;
  div {
    width: fit-content;
    margin-left: 150px;
    margin-right: 80px;
    line-height: 0.5;
  }
  a {
    text-decoration: none;
    color: white;
    ${"" /* color: #f22ebe; */}
    position: relative;
  }
`;

const Copyright = styled.p`
  position: absolute;
  top: 25px;
  right: 30px;
  color: #df5d6c;
  margin: 0;
  transform: rotate(-90deg);
  transform-origin: right top;
  font-size: 15px;
`;

const Content = styled.div`
  display: flex;
  margin: 0 auto;

  div {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: blue;
    margin-right: 40px;
  }
`;

const Footer = () => {
  const animation = useAnimation();
  const [footerRef, inView] = useInView({
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
      <Title>Get In Touch</Title>
      {/* <Content>
        <div></div>
        <div></div>
      </Content> */}

      <ContactGrid
        ref={footerRef}
        animate={animation}
        initial='hidden'
        variants={{
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: [0.4, 0.03, -0.01, 0.8] },
          },
          hidden: { opacity: 0, y: -200 },
        }}
      >
        <div>
          Capsicon Studio<i>®</i>
          <p>Amsterdam, NL</p>
        </div>
        <div>
          <a href='mailto:hello@capsicon.studio?subject=Hi Aurélie!'>
            aurelie@capsicon.studio
          </a>
          <p>+31 (0)613 00 83 47</p>
        </div>
        <div>
          <a href='http://'>Instagram</a>
        </div>
      </ContactGrid>
      {/* <Copyright>♥</Copyright> */}
    </Wrapper>
  );
};

export default Footer;
