import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const Wrapper = styled(motion.div)`
  height: 400px;
  background-color: yellow;
  position: relative;
`;

const Copyright = styled.p`
  position: absolute;
  left: 10px;
  top: 50%;
  margin: 0;
  transform: rotate(90deg) translate(-50%, 0);
  transform-origin: left bottom;
  font-size: 10px;
`;

const Footer = () => {
  const animation = useAnimation();
  const [footerRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
  });

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);

  return (
    <Wrapper
      ref={footerRef}
      animate={animation}
      initial='hidden'
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
        },
        hidden: { opacity: 0, y: 72 },
      }}
    >
      <h3>Get In Touch</h3>
      <Copyright>© 2021 Capsicon Studio</Copyright>
    </Wrapper>
  );
};

export default Footer;
