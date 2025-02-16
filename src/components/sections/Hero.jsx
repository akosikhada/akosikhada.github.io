import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import Typewriter from "typewriter-effect";
import HeroBgAnimation from "../HeroBgAnimation";
import { motion } from "framer-motion";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
} from "../../utils/motion";
import StarCanvas from "../canvas/Stars";
import GithubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Hero = () => {
  const helloText = "Hello, I'm";
  const nameText = `${Bio.name}`;

  const splitText = (text) => {
    return text
      .split("")
      .map((char, index) => (
        <span key={index}>{char === " " ? "\u00A0" : char}</span>
      ));
  };

  return (
    <div id="Home">
      <HeroContainer>
        <HeroBg>
          <StarCanvas />
          <HeroBgAnimation />
        </HeroBg>
        <motion.div {...headContainerAnimation}>
          <HeroInnerContainer>
            <HeroLeftContainer>
              <motion.div {...headTextAnimation}>
                <Title>
                  <div>{splitText(helloText)}</div>
                  <div>{splitText(nameText)}</div>
                </Title>
                <TextLoop>
                  I'm a
                  <Span>
                    <Typewriter
                      options={{
                        strings: Bio.roles,
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </Span>
                </TextLoop>
              </motion.div>

              <motion.div {...headContentAnimation}>
                <SubTitle>{Bio.description}</SubTitle>
              </motion.div>

              <SocialMediaIcons>
                <SocialMediaIcon href={Bio.github} target="display">
                  <GithubIcon style={{ fontSize: 36 }} />
                </SocialMediaIcon>
                <SocialMediaIcon href={Bio.instagram} target="display">
                  <InstagramIcon style={{ fontSize: 36 }} />
                </SocialMediaIcon>
                <SocialMediaIcon href={Bio.linkedin} target="display">
                  <LinkedInIcon style={{ fontSize: 36 }} />
                </SocialMediaIcon>
              </SocialMediaIcons>
              <ResumeButton href={Bio.resume} target="_blank">
                Résumé
              </ResumeButton>
            </HeroLeftContainer>
            <HeroRightContainer>
              <motion.div {...headContentAnimation}>
                <ImageWrapper>
                  <RotatingIconsBackground>
                    <img src="/assets/icons/html.png" alt="HTML" />
                    <img src="/assets/icons/css.png" alt="CSS" />
                    <img src="/assets/icons/js.png" alt="JavaScript" />
                    <img src="/assets/icons/bootstrap.png" alt="Bootstrap" />
                    <img src="/assets/icons/tailwind.png" alt="Tailwind CSS" />
                    <img src="/assets/icons/react.png" alt="React JS" />
                    <img src="/assets/icons/ts.png" alt="TypeScript" />
                    <img src="/assets/icons/next.png" alt="Next JS" />
                  </RotatingIconsBackground>
                  <Img
                    src="/miguel_enrique_dasalla.jpg"
                    alt="Miguel Enrique Dasalla"
                  />
                </ImageWrapper>
              </motion.div>
            </HeroRightContainer>
          </HeroInnerContainer>
        </motion.div>
      </HeroContainer>
    </div>
  );
};

export default Hero;

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  z-index: 1;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);

  /* ========== Mobile Devices (portrait and landscape) ========== */
  @media only screen and (max-width: 767px) {
    padding: 32px 16px;
  }

  /* ========== Tablet Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    padding: 66px 16px;
  }
`;

const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1440px;

  /* ========== Mobile Devices (portrait and landscape) ========== */
  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }

  /* ========== Tablet Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    flex-direction: column;
  }
`;

const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
  transition: all 0.3s ease-in-out;

  /* ========== Mobile Devices (portrait and landscape) ========== */
  @media only screen and (max-width: 767px) {
    order: 2;
    align-items: center;
    text-align: center;
    padding: 0 1rem;
    margin-bottom: 3rem;
    gap: 1rem;
    max-width: 100%;
  }

  /* ========== Tablet Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    order: 2;
    align-items: center;
    padding: 0 1.5rem;
    margin-top: 1rem;
    max-width: 90%;
    margin-left: auto;
    margin-right: auto;
    gap: 1.5rem;
  }

  /* ========== Laptop Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 1024px) and (max-width: 1439px) {
    max-width: 50%;
    padding-right: 1rem;
  }

  /* ========== Desktop Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 1440px) {
    padding-right: 3rem;
    max-width: 50%;
    justify-content: center;
    align-items: flex-start;
  }
`;

const HeroRightContainer = styled.div`
  width: 100%;
  order: 2;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  transition: all 0.3s ease-in-out;

  /* ========== Mobile Devices (portrait and landscape) ========== */
  @media only screen and (max-width: 767px) {
    order: 1;
    justify-content: center;
    margin-bottom: 2rem;
    padding: 0 1rem;
    max-width: 100%;
    min-height: 18.75rem;
  }

  /* ========== Tablet Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    order: 1;
    justify-content: center;
    margin-bottom: 2rem;
    padding: 0 2rem;
    max-width: 90%;
    margin-left: auto;
    margin-right: auto;
    min-height: 25rem;
  }

  /* ========== Laptop Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 1024px) and (max-width: 1439px) {
    max-width: 45%;
    padding-left: 1rem;
  }

  /* ========== Desktop Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 1440px) {
    order: 2;
    justify-content: flex-end;
    padding-left: 3rem;
    max-width: 50%;
    min-height: 31.25rem;
    position: relative;
    right: 0;
  }
`;

const Title = styled.div`
  font-weight: 900;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  /* ========== Mobile Devices (portrait and landscape) ========== */
  @media only screen and (max-width: 767px) {
    font-size: 1.5rem;
    text-align: center;
    line-height: 1.3;
    margin-bottom: 0.625rem;
  }

  /* ========== Tablet Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    text-align: center;
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }

  span {
    display: inline-block;
    transition: transform 0.3s ease-in-out;

    &:hover {
      animation: wave 1s ease-in-out;
      background: linear-gradient(
        225deg,
        hsla(271, 100%, 50%, 1) 0%,
        hsla(294, 100%, 50%, 1) 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }

  @keyframes wave {
    0%,
    100% {
      transform: translateY(0);
    }
    25% {
      transform: translateY(-0.5rem) rotate(-3deg);
    }
    50% {
      transform: translateY(0) rotate(0deg);
    }
    75% {
      transform: translateY(0.5rem) rotate(3deg);
    }
  }
`;

const TextLoop = styled.div`
  font-weight: 600;
  font-size: 30px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  /* ========== Mobile Devices (portrait and landscape) ========== */
  @media only screen and (max-width: 767px) {
    font-size: 20px;
    line-height: 48px;
    text-align: center;
  }

  /* ========== Tablet Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    text-align: center;
  }
`;

const Span = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.primary};
`;

const SubTitle = styled.div`
  font-size: 1.5rem;
  letter-spacing: 0.125rem;
  text-align: justify;
  line-height: 1.5;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.text_primary + 95};

  /* ========== Mobile Devices (portrait and landscape) ========== */
  @media only screen and (max-width: 767px) {
    font-size: 1rem;
    letter-spacing: 0.0625rem;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  /* ========== Tablet Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 1.25rem;
    letter-spacing: 0.09375rem;
    margin-bottom: 1.75rem;
    text-align: center;
  }
`;

const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;
  width: 100%;
  max-width: 12.5rem;
  text-align: center;
  padding: 0.9375rem 0;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  box-shadow: 1.25rem 1.25rem 3.75rem #1f2634, -1.25rem -1.25rem 3.75rem #1f2634;
  border-radius: 1rem;
  font-weight: 600;
  font-size: 1.375rem;
  color: white;
  transition: all 0.5s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 1.25rem 1.25rem 3.75rem #1f2634;
    filter: brightness(1);
  }

  /* ========== Mobile Devices (portrait and landscape) ========== */
  @media only screen and (max-width: 767px) {
    max-width: 10rem;
    padding: 0.75rem 0;
    font-size: 1rem;
    border-radius: 0.75rem;
  }

  /* ========== Tablet Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    max-width: 11rem;
    padding: 0.8125rem 0;
    font-size: 1.125rem;
    border-radius: 0.875rem;
  }

  /* ========== Laptop Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 1024px) and (max-width: 1439px) {
    max-width: 11.875rem;
    padding: 0.875rem 0;
    font-size: 1.25rem;
  }

  /* ========== Desktop Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 1440px) {
    max-width: 12.5rem;
    padding: 0.9375rem 0;
    font-size: 1.375rem;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 350px;
  height: 350px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
  z-index: 1;
  animation: float 3s ease-in-out infinite;

  @keyframes float {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-1.25rem);
    }
    100% {
      transform: translateY(0);
    }
  }

  /* ========== Mobile Devices (portrait and landscape) ========== */
  @media only screen and (max-width: 767px) {
    width: 250px;
    height: 250px;
  }

  /* ========== Tablet Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    width: 300px;
    height: 300px;
    margin-bottom: 1rem;
  }
`;

const Img = styled.img`
  position: relative;
  border-radius: 50%;
  border: 0.125rem solid transparent;
  transition: all 0.5s ease-in-out;
  transform-style: preserve-3d;
  will-change: transform;
  filter: drop-shadow(0 0.3125rem 0.9375rem rgba(0, 0, 0, 0.3));
  width: 100%;
  height: 100%;
  object-fit: cover;

  &:hover {
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 1.875rem rgba(23, 92, 230, 0.2);
    filter: drop-shadow(0 0.5rem 1.5625rem rgba(0, 0, 0, 0.4));
  }
`;

const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 40px 5px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  /* ========== Tablet Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    justify-content: center;
    padding: 0 0;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  justify-content: start;
  gap: 1rem;
  margin-bottom: 1rem;

  @media only screen and (max-width: 767px) {
    gap: 0.75rem;
  }
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out, transform 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: scale(1.2);
  }
`;

const RotatingIconsBackground = styled.div`
  position: absolute;
  width: 37.5rem;
  height: 37.5rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: rotate 30s linear infinite;
  z-index: 0;
  pointer-events: none;

  /* ========== Mobile Devices (portrait and landscape) ========== */
  @media only screen and (max-width: 767px) {
    width: 21.875rem;
    height: 21.875rem;
  }

  /* ========== Tablet Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    width: 31.25rem;
    height: 31.25rem;
  }

  @keyframes rotate {
    from {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }

  @keyframes cosmic-pulse {
    0% {
      filter: drop-shadow(0 0 0.5rem rgba(138, 43, 226, 0.6)) brightness(1);
    }
    50% {
      filter: drop-shadow(0 0 0.75rem rgba(138, 43, 226, 0.8)) brightness(1.2);
    }
    100% {
      filter: drop-shadow(0 0 0.5rem rgba(138, 43, 226, 0.6)) brightness(1);
    }
  }

  img {
    position: absolute;
    width: 2.8125rem;
    height: 2.8125rem;
    border-radius: 0.5rem;
    padding: 0.375rem;
    transition: all 0.5s ease;
    pointer-events: auto;
    filter: drop-shadow(0 0 0.3125rem rgba(138, 43, 226, 0.3)) brightness(0.9);
    animation: cosmic-pulse 3s ease-in-out infinite;
    animation-delay: calc(var(--delay) * 0.4s);

    /* ========== Mobile Devices (portrait and landscape) ========== */
    @media only screen and (max-width: 767px) {
      width: 1.5625rem;
      height: 1.5625rem;
      padding: 0.1875rem;
    }

    /* ========== Tablet Devices (portrait and landscape) ========== */
    @media only screen and (min-width: 768px) and (max-width: 1023px) {
      width: 2rem;
      height: 2rem;
      padding: 0.3125rem;
    }

    &:hover {
      transform: scale(1.2) rotate(-10deg);
      filter: drop-shadow(0 0 0.9375rem rgba(138, 43, 226, 0.9)) brightness(1.3);
      z-index: 10;
    }
  }

  ${[...Array(8)]
    .map((_, i) => {
      const angle = i * 45 * (Math.PI / 180);
      const baseRadius = 17;
      const x = Math.cos(angle) * baseRadius;
      const y = Math.sin(angle) * baseRadius;

      return `
      img:nth-child(${i + 1}) {
        left: calc(50% + ${x}rem);
        top: calc(50% + ${y}rem);
        transform: translate(-50%, -50%);
        --delay: ${i};

        /* ========== Mobile Devices (portrait and landscape) ========== */
        @media only screen and (max-width: 767px) {
          left: calc(50% + ${x * 0.55}rem);
          top: calc(50% + ${y * 0.55}rem);
        }

        /* ========== Tablet Devices (portrait and landscape) ========== */
        @media only screen and (min-width: 768px) and (max-width: 1023px) {
          left: calc(50% + ${x * 0.9}rem);
          top: calc(50% + ${y * 0.9}rem);
        }
      }
    `;
    })
    .join("")}
`;
