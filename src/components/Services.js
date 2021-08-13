import React, { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const Wrapper = styled.div`
  background-color: red;
  height: 500px;
`;

const ContainerText = styled.div``;

const Text = styled(motion.h2)`
  width: 50%;
  font-size: 23px;
  color: white;
  margin: 0;
`;

const Services = () => {
  const animation = useAnimation();
  const [contentRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-500px",
  });

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);

  return (
    <Wrapper
      ref={contentRef}
      animate={animation}
      initial='hidden'
      // variants={{
      //   visible: {
      //     opacity: 1,
      //     y: 0,
      //     transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
      //   },
      //   hidden: { opacity: 0, y: 72 },
      // }}
    >
      <ContainerText>
        <Text>
          Web Developer & Digital Strategist. I help companies, brands and
          entrepreneurs share their stories and build the best online version of
          themselves.
        </Text>
      </ContainerText>
    </Wrapper>
  );
};

export default Services;
