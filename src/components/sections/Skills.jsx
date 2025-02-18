import React from "react";
import styled from "styled-components";
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
        <SkillsContainer>
          {skills.map((skill, index) => (
            <SkillSection key={`skill-section-${index}`}>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((item, index) => (
                  <SkillItem key={`skill-${index}`}>
                    <SkillImage src={item.image} alt={item.name} />
                    <CustomTooltip className="tooltip">
                      {item.name}
                    </CustomTooltip>
                  </SkillItem>
                ))}
              </SkillList>
            </SkillSection>
          ))}
        </SkillsContainer>
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
  background-color: transparent;
  padding: 20px 10px;
  border-radius: 12px;

  @media (min-width: 768px) {
    padding: 60px 20px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  max-width: 1440px;
  gap: 0.75rem;
  padding: 10px;
  background-color: transparent;
  border-radius: 12px;

  @media (min-width: 768px) {
    padding: 40px 20px;
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

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem 0;
`;

const SkillSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  background: transparent;
  border-radius: 12px;

  @media (min-width: 768px) {
    gap: 1rem;
    padding: 1.5rem;
  }
`;

const SkillTitle = styled.div`
  font-size: 28px;
  font-weight: 800;
  color: ${({ theme }) => theme.text_primary};
  text-align: center;
  margin-bottom: 1rem;
`;

const SkillList = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  justify-items: center;
  padding: 0.5rem;
  background: transparent;

  @media (min-width: 480px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.25rem;
    padding: 1rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(6, 1fr);
    gap: 1.5rem;
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(8, 1fr);
  }
`;

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 65px;
  height: 65px;
  border-radius: 12px;
  background-color: #151b28;
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 0.75rem;
  transition: all 0.3s ease;
  position: relative;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    background-color: #1a2232;
  }

  &:hover .tooltip {
    visibility: visible;
    opacity: 1;
  }

  @media (min-width: 480px) {
    width: 75px;
    height: 75px;
    padding: 0.875rem;
  }

  @media (min-width: 768px) {
    width: 85px;
    height: 85px;
    padding: 1rem;
  }

  @media (min-width: 1024px) {
    width: 90px;
    height: 90px;
  }
`;

const SkillImage = styled.img`
  width: 85%;
  height: 85%;
  object-fit: contain;
  transition: transform 0.2s ease;
  filter: brightness(1);

  ${SkillItem}:hover & {
    transform: scale(0.9);
  }

  @media (min-width: 768px) {
    width: 75%;
    height: 75%;
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
