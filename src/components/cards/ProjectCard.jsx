import React from "react";
import styled from "styled-components";

const ProjectCards = ({ project, setOpenModal }) => {
  return (
    <Card
      status={project.status}
      onClick={() => setOpenModal({ state: true, project: project })}
    >
      <Image src={project.image} />
      <Tags>
        {project.tags?.map((tag, index) => (
          <Tag key={index}>
            <TagImage src={tag.icon} alt={tag.name} />
          </Tag>
        ))}
      </Tags>
      <Details>
        <Title>{project.title}</Title>
        <Date>{project.date}</Date>
      </Details>
    </Card>
  );
};

export default ProjectCards;

const Button = styled.button`
  display: none;
  width: 100%;
  padding: 10px;
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.text_black};
  font-size: 14px;
  font-weight: 700;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.8s ease-in-out;
`;

const Card = styled.div`
  width: 350px;
  height: 500px;
  background-color: ${({ theme }) => theme.card};
  cursor: pointer;
  border-radius: 1.5rem;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
  border: 2px solid
    ${({ theme, status }) => {
      switch (status) {
        case "completed":
          return theme.border_completed;
        case "inprogress":
          return theme.border_inprogress;
        case "onhold":
          return theme.border_onhold;
        default:
          return "transparent";
      }
    }};
  overflow: hidden;
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 1;
  &:hover ${Button} {
    display: block;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const Image = styled.img`
  width: 100%;
  max-height: max-content;
  height: auto;
  background-color: ${({ theme }) => theme.white};
  border-radius: 1rem;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
`;

const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 5px;
`;

const Tag = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;

  &:hover .tooltip {
    visibility: visible;
    opacity: 1;
  }
`;

const TagImage = styled.img`
  width: 20px;
  height: 20px;

  @media (max-width: 768px) {
    width: 15px;
    height: 15px;
  }
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 1.75rem;
  font-weight: 900;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Date = styled.div`
  font-size: 1rem;
  margin-left: 2px;
  font-weight: normal;
  color: ${({ theme }) => theme.text_secondary + 99};

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;
