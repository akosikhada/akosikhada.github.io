import React, { useState } from "react";
import styled from "styled-components";
import { projects } from "../../data/constants";
import ProjectCard from "../cards/ProjectCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import FolderIcon from "@mui/icons-material/Folder";

const Projects = ({ openModal, setOpenModal }) => {
  const [sliderRef, setSliderRef] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "60px",
    arrows: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "0",
          speed: 200,
          cssEase: "linear",
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "20px",
          speed: 200,
          cssEase: "linear",
          infinite: true,
        },
      },
    ],
  };

  const handleProjectClick = (url) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <Container id="Projects">
      <Wrapper>
        <Title>
          <StyledFolderIcon />
          Projects
        </Title>
        <Desc>
          My portfolio highlights my skills and experience through concrete
          examples of my Folder. Each project, linked to its code repository and
          live demo, showcases my ability to tackle complex challenges, leverage
          diverse technologies, and manage projects efficiently.
        </Desc>
        <StatusLegend>
          <StatusItem>
            <StatusDot color="#854CE6" />
            <span>Completed</span>
          </StatusItem>
          <StatusItem>
            <StatusDot color="#45c512" />
            <span>In Progress</span>
          </StatusItem>
          <StatusItem>
            <StatusDot color="#fc4444" />
            <span>Discontinued / On-Hold</span>
          </StatusItem>
        </StatusLegend>
        <CarouselContainer>
          <Slider ref={setSliderRef} {...settings}>
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
                onClick={() => handleProjectClick(project.demo)}
              />
            ))}
          </Slider>
          <ArrowContainer>
            <ArrowRight onClick={() => sliderRef?.slickPrev()}>
              <ChevronLeft />
            </ArrowRight>
            <ArrowLeft onClick={() => sliderRef?.slickNext()}>
              <ChevronRight />
            </ArrowLeft>
          </ArrowContainer>
        </CarouselContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  background-color: ${({ theme }) => theme.background_primary};
  padding: 60px 10px;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);

  @media (max-width: 768px) {
    padding: 40px 5px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 10px;
  gap: 15px;

  @media (max-width: 768px) {
    padding: 40px 5px;
  }
`;

const Title = styled.h2`
  font-size: 3.5rem;
  text-align: center;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Desc = styled.p`
  font-size: 1rem;
  text-align: center;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 0.875rem;
    text-align: justify;
    width: 90%;
    margin: 0 auto;
    line-height: 1.5rem;
    letter-spacing: 0.2pt;
  }
`;

const StatusLegend = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 20px 0;
  flex-wrap: wrap;
`;

const StatusItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.text_primary};
  font-size: 14px;
`;

const StatusDot = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
`;

const CarouselContainer = styled.div`
  width: 100%;
  position: relative;
  margin-top: 1.875rem;
  padding: 0 1.5625rem;

  .slick-list {
    margin: 0 -0.625rem;
    overflow: hidden;
  }

  .slick-track {
    display: flex !important;
    justify-content: center;
    touch-action: pan-y pinch-zoom;
  }

  .slick-slide {
    opacity: 0.5;
    transition: all 0.5s ease;
    transform: scale(0.85);
    filter: blur(0.125rem);
    pointer-events: none;

    &.slick-active {
      opacity: 0.5;
      transform: scale(0.85);
      filter: blur(0.125rem);
      pointer-events: none;

      @media only screen and (max-width: 62.5rem) {
        opacity: 1;
        transform: scale(1);
        filter: blur(0);
        pointer-events: auto;
      }
    }

    &.slick-current {
      opacity: 1;
      transform: scale(1);
      filter: blur(0);
      pointer-events: auto;
    }
  }

  .slick-slide > div {
    padding: 0 0.625rem;

    @media only screen and (max-width: 62.5rem) {
      display: flex;
      justify-content: center;
      margin: 0 auto;
      width: 100%;
      max-width: 31.25rem;
    }
  }

  @media only screen and (max-width: 767px) {
    padding: 0 0.625rem;
    margin-top: 1.25rem;
  }

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    padding: 0 1rem;
  }

  @media only screen and (min-width: 1024px) and (max-width: 1439px) {
    padding: 0 1.25rem;
  }

  @media only screen and (min-width: 1440px) {
    padding: 0 1.5625rem;
  }
`;

const ArrowContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
  padding: 0 1rem;
  z-index: 10;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ArrowLeft = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.card};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: ${({ theme }) => theme.text_primary};

  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: white;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
  }
`;

const ArrowRight = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.card};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: ${({ theme }) => theme.text_primary};

  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: white;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
  }
`;

const StyledFolderIcon = styled(FolderIcon)`
  font-size: 3rem !important;
  color: ${({ theme }) => theme.icon_color};

  @media (max-width: 768px) {
    font-size: 2.5rem !important;
  }
`;

