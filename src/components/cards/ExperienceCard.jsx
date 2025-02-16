import React from "react";
import styled from "styled-components";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const ExperienceCard = ({ experience }) => {
  const isEmpty =
    !experience.role &&
    !experience.company &&
    !experience.desc.length &&
    !experience.skills.length;

  return (
    <VerticalTimelineElement
      icon={
        <img
          width="100%"
          height="100%"
          alt={experience.company}
          style={{ borderRadius: "50%", objectFit: "cover" }}
          src={experience.img}
        />
      }
      contentStyle={{
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
        background: "#1d1836",
        color: "#fff",
        boxShadow: "rgba(23, 92, 230, 0.15) 0 0.25rem 1.5rem",
        backgroundColor: "rgba(17, 25, 40, 0.83)",
        border: "0.0625rem solid rgba(255, 255, 255, 0.125)",
        borderRadius: "0.375rem",
        padding: "1.5rem",
      }}
      contentArrowStyle={{
        borderRight: "0.4375rem solid rgba(255, 255, 255, 0.3)",
      }}
      date={experience.date}
    >
      {isEmpty ? (
        <NoExperience>No experience to show yet.</NoExperience>
      ) : (
        <>
          <Top>
            <Body>
              <Role>{experience.role}</Role>
              <Company>{experience.company}</Company>
            </Body>
          </Top>
          <Description>
            {experience?.desc && (
              <ul>
                {Array.isArray(experience.desc) ? (
                  experience.desc.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))
                ) : (
                  <li>{experience.desc}</li>
                )}
              </ul>
            )}
            {experience?.skills && (
              <>
                <Skills>
                  <b>Skills/Technologies Used:</b>
                  <ItemWrapper>
                    {experience?.skills?.map((skill, index) => (
                      <Skill key={index}>• {skill}</Skill>
                    ))}
                  </ItemWrapper>
                </Skills>
              </>
            )}
          </Description>
        </>
      )}
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;


const Top = styled.div`
  display: flex;
  max-width: 100%;
  gap: 0.75rem;
`;

const Body = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const Role = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.text_primary + 99};
  line-height: 1.4;

  @media only screen and (max-width: 767px) {
    font-size: 1.25rem;
  }

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 1.375rem;
  }
`;

const Company = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary + 99};
  line-height: 1.4;
`;

const Description = styled.div`
  width: 100%;
  font-size: 0.875rem;
  letter-spacing: 0.02em;
  font-weight: normal;
  color: ${({ theme }) => theme.text_primary + 99};
  margin-bottom: 0.625rem;
  line-height: 1.6;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    margin-bottom: 0.75rem;
    position: relative;
    padding-left: 1.25rem;

    &:before {
      content: "•";
      position: absolute;
      left: 0;
      color: ${({ theme }) => theme.primary};
    }
  }
`;

const Skills = styled.div`
  width: 100%;
  margin-top: 0.5rem;
`;

const Skill = styled.div`
  font-size: 0.875rem;
  font-weight: normal;
  color: ${({ theme }) => theme.text_primary + 99};
  line-height: 1.4;

  @media only screen and (max-width: 767px) {
    font-size: 0.8125rem;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const NoExperience = styled.div`
  font-size: 2rem;
  color: ${({ theme }) => theme.text_primary + 99};
`;
