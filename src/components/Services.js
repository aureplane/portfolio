import React, { useEffect } from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const Wrapper = styled.div`
  width: 100%;
`;

const ticker = keyframes`
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  `;

const StickyBar = styled.div`
  height: 35px;
  position: sticky;
  bottom: 0;
  text-align: center;
  font-family: SofiaPro, sans-serif;
  -webkit-font-smoothing: subpixel-antialiased;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  background-color: #fe0ab7;
  background-color: black;
  color: white;
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
const Subtitle = styled.div`
  background-color: black;
  height: 480px;
  position: relative;
  @media (min-width: 1024px) {
    height: 600px;
  }
`;

const ContainerText = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  width: 100%;
`;

const Text = styled(motion.p)`
  font-family: SofiaPro, sans-serif;
  font-size: 25px;
  color: white;
  margin: 2rem;
  line-height: 1.3;
  letter-spacing: 0.15em;
  width: 100%;
  margin-top: 60px;
  svg {
    position: absolute;
    margin: 35px 0 0 25px;
    width: 100px;
    fill: white;
    transform: scaleX(-1);
  }

  @media (min-width: 1024px) {
    font-size: 50px;
    margin-right: 15%;
    margin-top: 90px;
    svg {
      margin: 15px 0 0 25px;
    }
  }
`;

const MainText = styled.div`
  margin: 0 25px 70px;
  h2 {
    font-family: arial;
    font-size: 40px;
    font-weight: 800;
    text-transform: uppercase;
    color: #ff59c7;
    color: black;
    -webkit-text-stroke: 2px black;
    letter-spacing: 0.12em;
    margin-bottom: 5px;
  }
  p {
    line-height: 1.5em;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.07em;
  }
  a {
    text-decoration: none;
    color: black;
    transition: all 0.5s;
  }
  div {
    margin-bottom: 70px;
  }
  @media (min-width: 1024px) {
    h2 {
      font-size: 70px;
    }
  }
`;
const Intro = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  a {
    background: linear-gradient(rgba(0, 0, 0, 0) 60%, #ff59c773 40%);
  }
  a:hover {
    background: linear-gradient(rgba(0, 0, 0, 0) 10%, #ff59c773 70%);
  }
  img {
    width: 100px;
    border-radius: 50%;
    align-self: center;
  }
  svg {
    transform: translateY(4px);
  }
  .email {
    color: #ff59c773;
    background: none;
    a:hover {
      background: linear-gradient(rgba(0, 0, 0, 0) 10%, #ff59c7 70%);
    }
  }
  @media (min-width: 1024px) {
    width: 45%;
    img {
      position: absolute;
      filter: grayscale(100%);
      right: -23%;
      bottom: -100px;
      width: 150px;
      opacity: 0.2;
    }
  }
`;
const Skills = styled.div``;
const References = styled.div`
  a {
    text-decoration: none;
    color: black;
  }
  a:hover {
    background-color: rgba(255, 89, 299, 0.7);
  }
`;

const Services = () => {
  const animation = useAnimation();
  const [contentRef, inView] = useInView({
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
        transition: { duration: 0.7, ease: [0.6, 0.05, -0.01, 0.9] },
      },
      hidden: { opacity: 0, y: 90 },
    };
  }

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);

  return (
    <Wrapper>
      <Subtitle>
        <ContainerText
          ref={contentRef}
          animate={animation}
          initial='hidden'
          variants={desktopVariants}
        >
          <Text>
            Websites Design, Development & Digital Strategy, helping brands and
            entrepreneurs share their stories and reach their audience.
            <svg viewBox='0 0 1200 1200'>
              <path
                stroke-dasharray='10'
                id='heart-path'
                d='M1072.235,158.257c-28.375-39.251-71.714-63.505-120.835-62.205c-28.354,0.751-55.124,8.807-79.655,21.6
		c-26.871,2.111-53.966,10.294-78.977,23.995c-93.458,51.192-125.363,160.28-150.397,256.348c-1.368,5.249-2.024,8.191-5.137,3.476
		c-62.628-94.853-131.359-189.182-221.133-260.294c-44.622-35.346-93.621-65.132-147.418-84.322
		c-26.423-9.426-55.712-11.002-78.684,7.369c-19.484,15.582-26.734,39.784-28.551,63.83c-1.232,16.302,0.886,32.561,4.181,48.561
		c-16.37,8.123-31.666,19.948-45.328,36.285c-38.272,45.764-31.078,100.949-10.03,152.888
		c21.855,53.931,47.983,105.981,77.262,156.25c58.104,99.762,127.501,192.297,196.903,284.349
		c73.172,97.055,147.265,194.493,245.55,267.368c25.615,23.798,51.736,47.057,78.456,69.628
		c25.796,21.79,63.311-15.363,37.319-37.319c-5.566-4.702-25.415-24.138-53.742-52.914c23.553,7.284,49.016-23.434,27.038-43.29
		C561.223,867.275,432.029,695.168,338.529,504.134c-37.647-76.921-69.143-156.774-94.277-238.618
		c34.985-12.998,73.538-7.549,108.705,5.523c36.7,13.641,71.692,35.039,103.845,59.003
		c56.382,49.321,106.822,105.818,156.647,161.358c2.5,2.787,5.31,4.744,8.276,6c1.657,1.799,3.631,3.435,5.981,4.842
		c11.071,6.632,30.475,3.602,36.104-9.466c5.826-13.524,11.923-26.991,18.237-40.388c2.687-2.16,5.062-5.139,6.924-9.076
		c28.229-59.705,59.369-121.534,110.026-165.541c46.476-40.374,125.942-65.796,161.721,0.04
		c13.61,25.043,18.429,54.618,19.473,82.798c0.261,7.028,0.302,14.055,0.249,21.082c-7.743,31.162-17.996,61.612-26.205,89.429
		c-0.262,0.89-0.536,1.776-0.798,2.665c-31.171,64.511-62.975,128.732-94.393,193.116
		c-42.822,87.753-85.644,175.505-128.466,263.257c-9.681,19.84,6.327,38.126,22.764,39.959
		c-10.836,29.233-17.716,59.679-17.493,91.578c0.171,24.441,37.887,38.215,49.175,13.32c8.381-18.488,16.602-37.045,24.742-55.638
		c8.774,16.118,34.531,22.926,46.131,2.16c44.75-80.116,75.65-166.932,100.591-255.005c14.742-52.057,29.347-104.763,42.023-157.819
		c22.076-49.347,42.803-99.299,62.089-149.791C1096.45,365.064,1138.114,249.386,1072.235,158.257z M143.787,369.465
		c0.019-0.844-22.7-29.056-27.24-79.117c-4.91-54.137,34.596-83.415,56.296-88.863c0.922,3.37,12.346,50.208,13.29,53.572
		C170.369,267.81,147.419,314.077,143.787,369.465z M254.963,447.517c45.485,107.081,171.211,294.681,206.3,357.757
		c-17.838,8.655-91.455-108.285-118.245-148.249c-27.701-41.323-53.992-83.59-78.8-126.712
		c-25.312-43.998-53.766-89.661-69.931-137.991c-10.987-32.849-12.351-67.206,5.155-93.458
		C215.623,349.257,234.268,398.796,254.963,447.517z M487.162,286.906c-24.586-21.292-50.229-41.363-77.395-59.599
		c-53.491-35.906-127.123-70.386-193.381-64.59c-1.283-7.052-2.204-14.144-2.414-21.291c-0.355-12.096-0.701-33.018,12.878-38.333
		c10.438-4.086,26.334,3.969,35.708,7.623c11.614,4.525,22.93,9.777,34.048,15.407c22.855,11.573,44.723,25.061,65.555,39.959
		c48.904,34.975,91.342,77.811,129.725,124.266C490.319,289.19,488.74,288.049,487.162,286.906z'
              ></path>
            </svg>
          </Text>
        </ContainerText>
      </Subtitle>

      <MainText>
        <Intro>
          <h2>Hi!</h2>
          <p>
            I'm Aurélie, Front-end developer based in Amsterdam. I have worked
            in the past at{" "}
            <a href='https://bravoure.nl/en/' target='_blank'>
              Bravoure
            </a>
            . Currently working at{" "}
            <a href='https://www.debijenkorf.nl/' target='_blank'>
              De Bijenkorf
            </a>
            .
            <br />
            Open to freelance projects. Feel free to contact me at{" "}
            <a href='mailto:aur.plane@gmail.com?subject=👋' class='email'>
              aur.plane@gmail.com
            </a>
          </p>
        </Intro>
        <Skills>
          <h2>Skills</h2>
          <p>
            HTML / CSS / Javascript / Sass / React / Next.JS / Styled components
            / Typescript / Jest
          </p>
        </Skills>
        <References>
          <h2>References</h2>
          <p>
            →{" "}
            <a href='https://www.debijenkorf.nl/' target='_blank'>
              De Bijenkorf
            </a>
          </p>
          <p>
            →{" "}
            <a href='https://www.bestkeptsecret.nl/' target='_blank'>
              Best Kept Secret Festival
            </a>
          </p>
          <p>
            →{" "}
            <a href='https://www.awakenings.com/en/' target='_blank'>
              Awakenings Festival
            </a>
          </p>
          <p>
            →{" "}
            <a href='https://www.eyefilm.nl/nl' target='_blank'>
              Eye Filmmuseum
            </a>
          </p>
          <p>
            →{" "}
            <a href='https://www.change.inc/' target='_blank'>
              Change Inc.
            </a>
          </p>
          <p>
            →{" "}
            <a href=' https://mocomuseum.com/' target='_blank'>
              Moco Museum
            </a>
          </p>
          <p>
            →{" "}
            <a href='https://www.cepezed.nl/en/' target='_blank'>
              Cepezed
            </a>
          </p>
          <p>
            →{" "}
            <a href='https://www.amsterdam-dance-event.nl/en/' target='_blank'>
              Amsterdam Dance Event
            </a>
          </p>
          <p>
            →{" "}
            <a href='https://ita.nl/nl/' target='_blank'>
              ITA
            </a>
          </p>
          <p>
            →{" "}
            <a href='https://boercroon.nl/' target='_blank'>
              Boer & Croon
            </a>
          </p>
          <p>
            →{" "}
            <a href='https://www.malingeniemusic.com' target='_blank'>
              Malin Genie Music
            </a>
          </p>
          <p>
            →{" "}
            <a href='https://dominiquedorla.re/' target='_blank'>
              Dominique Dorla
            </a>
          </p>
          <p>
            →{" "}
            <a href='https://lakazartson.re/' target='_blank'>
              La Kaz Art & Son
            </a>
          </p>
        </References>
      </MainText>

      <StickyBar>
        {isMobile ? (
          <div>
            <span class='ticker__text'>FRENCH</span>
            <span class='ticker__text' aria-hidden='true'>
              ☆
            </span>
            <span class='ticker__text' aria-hidden='true'>
              FRONT-END
            </span>
            <span class='ticker__text' aria-hidden='true'>
              ☆
            </span>
            <span class='ticker__text' aria-hidden='true'>
              DEVELOPER
            </span>
            <span class='ticker__text' aria-hidden='true'>
              ☆
            </span>
            <span class='ticker__text' aria-hidden='true'>
              AMSTERDAM
            </span>
            <span class='ticker__text' aria-hidden='true'>
              ☆
            </span>
            <span class='ticker__text' aria-hidden='true'>
              AURÉLIE PLANE
            </span>
            <span class='ticker__text' aria-hidden='true'>
              ☆
            </span>
            <span class='ticker__text'>FRENCH</span>
            <span class='ticker__text' aria-hidden='true'>
              ☆
            </span>
            <span class='ticker__text' aria-hidden='true'>
              FRONT-END
            </span>
            <span class='ticker__text' aria-hidden='true'>
              ☆
            </span>
            <span class='ticker__text' aria-hidden='true'>
              DEVELOPER
            </span>
            <span class='ticker__text' aria-hidden='true'>
              ☆
            </span>
            <span class='ticker__text' aria-hidden='true'>
              AMSTERDAM
            </span>
            <span class='ticker__text' aria-hidden='true'>
              ☆
            </span>
            <span class='ticker__text' aria-hidden='true'>
              AURÉLIE PLANE
            </span>
          </div>
        ) : (
          <div>
            <span class='ticker__text'>FRENCH</span>
            <span class='ticker__text' aria-hidden='true'>
              ☺
            </span>
            <span class='ticker__text' aria-hidden='true'>
              FRONT-END
            </span>
            <span class='ticker__text' aria-hidden='true'>
              ☆
            </span>
            <span class='ticker__text' aria-hidden='true'>
              DEVELOPER
            </span>
            <span class='ticker__text' aria-hidden='true'>
              ☺
            </span>
            <span class='ticker__text' aria-hidden='true'>
              AMSTERDAM
            </span>
            <span class='ticker__text' aria-hidden='true'>
              ⛱
            </span>
            <span class='ticker__text' aria-hidden='true'>
              AURÉLIE PLANE
            </span>
            <span class='ticker__text' aria-hidden='true'>
              ☀
            </span>
            <span class='ticker__text'>FRENCH</span>
            <span class='ticker__text' aria-hidden='true'>
              ☺
            </span>
            <span class='ticker__text' aria-hidden='true'>
              FRONT-END
            </span>
            <span class='ticker__text' aria-hidden='true'>
              ☆
            </span>
            <span class='ticker__text' aria-hidden='true'>
              DEVELOPER
            </span>
            <span class='ticker__text' aria-hidden='true'>
              ☺
            </span>
            <span class='ticker__text' aria-hidden='true'>
              AMSTERDAM
            </span>
            <span class='ticker__text' aria-hidden='true'>
              ⛱
            </span>
            <span class='ticker__text' aria-hidden='true'>
              AURÉLIE PLANE
            </span>
          </div>
        )}
      </StickyBar>
    </Wrapper>
  );
};

export default Services;
