import React from "react";
import styled from "styled-components";
import { experiences } from "../../data/constants";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ExperienceCard from "../cards/ExperienceCard";
import EarthCanvas from "../canvas/Earth";
import WorkIcon from "@mui/icons-material/Work";

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

  @media screen and (max-width: 768px) {
    padding: 40px 5px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  padding: 60px 10px;
  gap: 15px;

  @media (max-width: 768px) {
    padding: 40px 5px;
  }
`;

const Title = styled.div`
  font-size: 3.5rem;
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
    font-size: 3rem;
  }
`;

const Desc = styled.div`
  font-size: 1rem;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    font-size: 0.875rem;
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
