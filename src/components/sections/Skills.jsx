import React from "react";
import styled, { keyframes } from "styled-components";
import { skills } from "../../data/constants";
import BuildIcon from "@mui/icons-material/Build";

const Skills = () => {
  return (
    <Container id="Skills">
      <Wrapper>
        <Title>
          <StyledBuildIcon />
          Skills
        </Title>
        <Desc>Technologies and Tools I work with</Desc>
        {skills.map((skill, index) => (
          <SkillSection key={`skill-section-${index}`}>
            <SkillTitle>{skill.title}</SkillTitle>
            <Slider>
              <MaskLeft />
              <SlideTrack>
                {Array(skill.skills.length).fill(
                  skill.skills.map((item, index) => (
                    <SkillItem key={`skill-${index}`}>
                      <SkillImage src={item.image} alt={item.name} />
                      <CustomTooltip className="tooltip">
                        {item.name}
                      </CustomTooltip>
                    </SkillItem>
                  ))
                )}
              </SlideTrack>
              <MaskRight />
            </Slider>
          </SkillSection>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Skills;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  background-color: ${({ theme }) => theme.background_secondary};
  padding: 60px 20px;
  border-radius: 12px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  max-width: 1440px;
  gap: 0.75rem;
  padding: 40px 20px;
  background-color: ${({ theme }) => theme.background_primary};
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 5px 0;
  }
`;

const Title = styled.div`
  font-size: 56px;
  text-align: center;
  font-weight: 900;
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
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  max-width: 800px;
  margin: 0 auto;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const SkillSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  background: ${({ theme }) => theme.background_light};
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  margin-bottom: 20px;
`;

const SkillTitle = styled.div`
  font-size: 32px;
  font-weight: 900;
  margin-bottom: 20px;
  text-align: center;
  color: ${({ theme }) => theme.text_primary};
`;

const Slider = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  position: relative;
`;

const slide = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
`;

const SlideTrack = styled.div`
  display: flex;
  gap: 20px;
  width: calc(200%);
  animation: ${slide} 20s linear infinite;
  &:hover {
    animation-play-state: paused;
  }
`;

const MaskLeft = styled.div`
  position: absolute;
  left: 0;
  width: 50px;
  height: 100%;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.background_secondary},
    transparent
  );
  pointer-events: none;
`;

const MaskRight = styled.div`
  position: absolute;
  right: 0;
  width: 50px;
  height: 100%;
  background: linear-gradient(
    to left,
    ${({ theme }) => theme.background_secondary},
    transparent
  );
  pointer-events: none;
`;

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  flex-shrink: 0;
  border: 2px solid ${({ theme }) => theme.border_primary};
  border-radius: 12px;
  padding: 14px;
  transition: transform 0.3s ease, box-shadow 0.3s ease,
    background-color 0.3s ease;
  cursor: help;
  position: relative;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
    background-color: ${({ theme }) => theme.background_hover};
  }

  &:hover .tooltip {
    visibility: visible;
    opacity: 1;
  }

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

const SkillImage = styled.img`
  width: 100%;
  height: 100%;
  transition: transform 0.2s ease;

  ${SkillItem}:hover & {
    transform: scale(0.8);
  }

  @media (max-width: 768px) {
    width: 80%;
    height: 80%;
  }
`;

const CustomTooltip = styled.span`
  position: absolute;
  font-size: 1rem;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 0.5rem 1rem;
  z-index: 50;
  border-radius: 0.375rem;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  border: 1px solid #333;
  white-space: nowrap;

  &:before {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-width: 0;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const StyledBuildIcon = styled(BuildIcon)`
  font-size: 56px !important;
  color: ${({ theme }) => theme.icon_color};
  @media (max-width: 768px) {
    font-size: 40px !important;
  }
`;
