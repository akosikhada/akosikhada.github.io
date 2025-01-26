import React from "react";
import styled from "styled-components";
import { skills } from "../../data/constants";
import BuildIcon from "@mui/icons-material/Build";
import Tooltip from "@mui/material/Tooltip"; // Import Tooltip component

// Modern, clean layout design
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
  max-width: 1200px;
  gap: 0.75rem;
  padding: 40px 20px;
  background-color: ${({ theme }) => theme.background_primary};
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  @media (max-width: 960px) {
    padding: 30px;
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
`;

const SkillTitle = styled.div`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center;
  color: ${({ theme }) => theme.text_primary};
`;

const SkillGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 24px;
  width: 100%;
  @media (max-width: 768px) {
    gap: 16px;
  }
`;

const SkillItem = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  border: 2px solid ${({ theme }) => theme.border_primary};
  border-radius: 12px;
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease,
    background-color 0.3s ease;
  cursor: help;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
    background-color: ${({ theme }) => theme.background_hover};
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 10px 14px;
  }
`;

const SkillImage = styled.img`
  width: 40px;
  height: 40px;
  transition: transform 0.2s ease;

  ${SkillItem}:hover & {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

const StyledBuildIcon = styled(BuildIcon)`
  font-size: 56px !important;
  color: ${({ theme }) => theme.icon_color};
  @media (max-width: 768px) {
    font-size: 40px !important;
  }
`;

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
            <SkillGrid>
              {skill.skills.map((item, index_x) => (
                <Tooltip key={`skill-x-${index_x}`} title={item.name} arrow>
                  <SkillItem>
                    <SkillImage src={item.image} alt={item.name} />
                  </SkillItem>
                </Tooltip>
              ))}
            </SkillGrid>
          </SkillSection>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Skills;
