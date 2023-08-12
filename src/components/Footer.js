import React, { useEffect } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ff59c7;
  position: relative;
  padding: 25px 0 5px 25px;
  width: 100%;
  @media (min-width: 1024px) {
    height: 270px;
    padding: 10px 15px;
  }
`;

const Title = styled.h2`
  font-family: arial;
  font-size: 40px;
  text-transform: uppercase;
  color: transparent;
  -webkit-text-stroke: 1px white;
  letter-spacing: 3px;
  margin-top: 0;
  @media (min-width: 1024px) {
    font-size: 60px;
  }
`;

const ContactGrid = styled(motion.div)`
  color: white;
  bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 15px;

  a {
    text-decoration: none;
    color: white;
    position: relative;
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    margin-bottom: 0;

    div {
      width: fit-content;
      margin-left: 150px;
      margin-right: 80px;
      line-height: 0.5;
    }
  }
`;

const Socials = styled.div`
  a {
    display: inline-block;
    margin-bottom: 15px;
  }
`;

const Footer = () => {
  const animation = useAnimation();
  const [footerRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-200px",
  });

  let desktopVariants = {};
  const isMobile = window.innerWidth < 768;
  if (!isMobile) {
    desktopVariants = {
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.4, 0.03, -0.01, 0.8] },
      },
      hidden: { opacity: 0, y: -200 },
    };
  }

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);

  return (
    <Wrapper>
      <Title>Get In Touch</Title>
      <ContactGrid
        ref={footerRef}
        animate={animation}
        initial='hidden'
        variants={desktopVariants}
      >
        <div>
          <a href='mailto:aur.plane@gmail.com?subject=👋'>
            aur.plane@gmail.com
          </a>
          <p>+33 (0)663 68 65 40</p>
        </div>
        <Socials>
          <a href='https://www.linkedin.com/in/aurelieplane/'>Linkedin</a>
          <br />
          <a href='https://www.instagram.com/aurelieplane/'>Instagram</a>
        </Socials>
      </ContactGrid>
    </Wrapper>
  );
};

export default Footer;
