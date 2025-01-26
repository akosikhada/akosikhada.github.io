import React from "react";
import styled from "styled-components";
import { experiences } from "../../data/constants";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ExperienceCard from "../cards/ExperienceCard";
import EarthCanvas from "../canvas/Earth";
import WorkIcon from "@mui/icons-material/Work";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 60px 20px;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 98%, 0 100%);
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1440px;
  padding: 40px 20px;
  gap: 0.75rem;

  /* ========== Mobile Devices (portrait and landscape) ========== */
  @media only screen and (max-width: 767px) {
    padding: 3rem 1rem;
    gap: 0.625rem;
  }

  /* ========== Tablet Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    padding: 4rem 1.5rem;
    gap: 0.75rem;
  }

  /* ========== Laptop Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 1024px) and (max-width: 1439px) {
    padding: 4.5rem 2rem;
  }
`;

const Title = styled.div`
  font-size: 56px;
  text-align: center;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 100%;
  margin: 0 auto;
  @media (max-width: 768px) {
    font-size: 48px;
  }
`;

const Desc = styled.div`
  font-size: 1rem;
  text-align: center;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 2.5rem;

  /* ========== Mobile Devices (portrait and landscape) ========== */
  @media only screen and (max-width: 767px) {
    font-size: 0.875rem;
    margin-bottom: 1.875rem;
  }

  /* ========== Tablet Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    margin-bottom: 2rem;
  }
`;

const EarthCanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledWorkIcon = styled(WorkIcon)`
  font-size: 56px !important;
  color: ${({ theme }) => theme.icon_color};
  @media (max-width: 768px) {
    font-size: 40px !important;
  }
`;

const Experience = () => {
  return (
    <Container id="Experience">
      <Wrapper>
        <Title>
          <StyledWorkIcon />
          Experience
        </Title>
        <Desc>WHAT I HAVE DONE SO FAR</Desc>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
        <EarthCanvasContainer>
          <EarthCanvas />
        </EarthCanvasContainer>
      </Wrapper>
    </Container>
  );
};

export default Experience;
