import { CloseRounded, GitHub, Launch } from "@mui/icons-material";
import { Modal } from "@mui/material";
import React from "react";
import styled from "styled-components";

const ProjectDetail = ({ openModal, setOpenModal }) => {
  const project = openModal?.project;

  return (
    <Modal
      open={true}
      onClose={() => setOpenModal({ state: false, project: null })}
    >
      <Container>
        <Wrapper>
          <CloseRounded
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              cursor: "pointer",
            }}
            onClick={() => setOpenModal({ state: false, project: null })}
          />
          <Image src={project?.image} />
          <Title>{project?.title}</Title>
          <Date>{project.date}</Date>
          <Tags>
            {project?.tags.map((tag, index) => (
              <Tag key={index}>
                <TagImage src={tag.icon} alt={tag.name} />
                <Tooltip className="tooltip">{tag.name}</Tooltip>
              </Tag>
            ))}
          </Tags>
          <Desc>
            {project?.description.map((desc, index) => (
              <DescItem key={index}>{desc}</DescItem>
            ))}
          </Desc>
          <ButtonGroup>
            <Button
              $dull={!project?.source}
              href={project?.source || "#"}
              target="new"
              disabled={!project?.source}
              onClick={(e) => !project?.source && e.preventDefault()}
            >
              <GitHub />
              {project?.source ? "Source Code" : "Private"}
            </Button>

            {project?.demo && (
              <Button href={project.demo} target="new">
                <Launch />
                Live Demo
              </Button>
            )}
          </ButtonGroup>
        </Wrapper>
      </Container>
    </Modal>
  );
};

export default ProjectDetail;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000000a7;
  display: flex;
  align-items: top;
  justify-content: center;
  overflow-y: scroll;
  transition: all 0.5s ease;
`;

const Wrapper = styled.div`
  max-width: 800px;
  width: 100%;
  height: max-content;
  border-radius: 1rem;
  margin: 10px 10px;
  background-color: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text_primary};
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  position: relative;

  @media (max-width: 768px) {
    padding: 10px 10px;
    max-width: 500px;
  }
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 900;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const Date = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

const Desc = styled.ul`
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.text_primary};
  padding-left: 20px;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

const DescItem = styled.li`
  margin-bottom: 8px;
`;

const Image = styled.img`
  width: 100%;
  max-height: max-content;
  height: auto;
  object-fit: cover;
  border-radius: 0.875rem;
  margin: 30px auto;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  display: block;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px 0px;
`;

const Tag = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
  margin: 4px;

  &:hover .tooltip {
    visibility: visible;
    opacity: 1;
  }
`;

const TagImage = styled.img`
  width: 50px;
  height: 50px;
  cursor: help;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

const Tooltip = styled.span`
  position: absolute;
  font-size: 0.75rem;
  background-color: #111;
  color: white;
  padding: 0.25rem 0.5rem;
  z-index: 50;
  border-radius: 0.375rem;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  pointer-events: none;
  border: 1px solid #333;
  white-space: nowrap;

  &:before {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-width: 6px;
    border-style: solid;
    border-color: transparent transparent #ffffff transparent;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 12px 0px;
  gap: 12px;
`;

const Button = styled.a`
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: normal;
  color: ${({ theme }) => theme.text_primary};
  padding: 12px 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.primary};
  ${({ $dull, theme }) =>
    $dull &&
    `background-color: ${theme.bgLight};
        color: ${theme.text_secondary};
        &:hover {
        background-color: ${theme.bg + 99};
        }
    `}
  ${({ disabled, theme }) =>
    disabled &&
    `background-color: ${theme.bgLight};
    color: ${theme.text_secondary};
    pointer-events: none;
    opacity: 0.8;
    &:hover {
    background-color: ${theme.bgLight};
    cursor: not-allowed;
    }
    `}
  cursor: pointer;
  text-decoration: none;
  transition: all 0.5s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  &:hover {
    background-color: ${({ theme }) => theme.primary + 99};
  }
`;
