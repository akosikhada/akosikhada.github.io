// IMPORTED LOGO FROM IMAGES

// import qcu from "../images/logo/qcu.png";
import kopibara from "../images/logo/kopibara.png";
import unilink from "../images/logo/unilink.png";
import job_portal from "../images/logo/job_portal.png";
import portfolio_1 from "../images/logo/portfolio_1.jpg";
import portfolio_2 from "../images/logo/portfolio_2.png";
import crypto_cosmos from "../images/logo/crypto_cosmos.png";

// IMPORTED ICONS FROM IMAGES

import html from "../images/icons/html.png";
import css from "../images/icons/css.png";
import js from "../images/icons/js.png";
import bootstrap from "../images/icons/bootstrap.png";
import tailwind from "../images/icons/tailwind.png";
import react from "../images/icons/react.png";
import ts from "../images/icons/ts.png";
import next from "../images/icons/next.png";
import node from "../images/icons/node.png";
import express from "../images/icons/express.png";
import csharp from "../images/icons/csharp.png";
import php from "../images/icons/php.png";
import mysql from "../images/icons/mysql.png";
import sqlserver from "../images/icons/sqlserver.png";
import mongodb from "../images/icons/mongodb.png";
import firebase from "../images/icons/firebase.png";
import dotnet from "../images/icons/dotnet.png";
import mui from "../images/icons/mui.png";
import framer from "../images/icons/framer.png";
import git from "../images/icons/git.png";
import netlify from "../images/icons/netlify.png";
import vercel from "../images/icons/vercel.png";
import coingecko from "../images/icons/coingecko.png";
import github from "../images/icons/github.png";
import npm from "../images/icons/npm.png";
import vite from "../images/icons/vite.png";
import vscode from "../images/icons/vscode.png";
import visualstudio from "../images/icons/visualstudio.png";
import paymongo from "../images/icons/paymongo.png";
import styled from "../images/icons/styled.png";
import three from "../images/icons/three.png";

// ABOUT ME

export const Bio = {
  name: "Miguel Enrique Dasalla",
  roles: ["Programmer", "Web Developer", "Full-Stack Developer"],
  description:
    "A passionate and detail-oriented web developer committed to crafting captivating digital experiences. I thrive on staying up-to-date with the latest technologies and frameworks to deliver innovative and user-centric solutions.",
  github: "https://github.com/Khadalicioso",
  instagram: "https://www.instagram.com/khadalicioso",
  linkedin: "https://www.linkedin.com/in/miguel-enrique-d-856879341/",
  resume:
    "https://drive.google.com/file/d/1tvkTYO63vX5NT2Md6FG4D5PqUfAlJ88S/view?usp=drive_link",
};

// SKILLS AND TECHNOLOGIES

export const skills = [
  {
    skills: [
      {
        name: "HTML",
        image: html,
      },
      {
        name: "CSS",
        image: css,
      },
      {
        name: "JavaScript",
        image: js,
      },
      {
        name: "Bootstrap",
        image: bootstrap,
      },
      {
        name: "Tailwind CSS",
        image: tailwind,
      },
      {
        name: "React",
        image: react,
      },
      {
        name: "TypeScript",
        image: ts,
      },
      {
        name: "Next JS",
        image: next,
      },
      {
        name: "PHP",
        image: php,
      },
      {
        name: "MySQL",
        image: mysql,
      },
      {
        name: "MongoDB",
        image: mongodb,
      },
      {
        name: "Firebase",
        image: firebase,
      },
    ],
  },
];

// EXPERIENCES

export const experiences = [
  {
    id: 0,
    role: "",
    img: "",
    company: "",
    date: "",
    desc: [],
    skills: [],
  },
];

// PROJECTS

export const projects = [
  {
    id: 5,
    title: "Crypto Cosmos",
    date: "January 2025",
    description:
      "Crypto Cosmos is a dynamic and user-friendly web application developed using HTML, CSS, JavaScript, and React.js, designed to provide real-time insights into the cryptocurrency market. Leveraging the comprehensive data provided by the CoinGecko API, the application offers users access to a wide range of cryptocurrencies, including real-time pricing information, market trends, and historical data. With its intuitive interface and robust data integration, Crypto Cosmos empowers users to make informed decisions and stay abreast of the ever-evolving cryptocurrency landscape. This application serves as a valuable resource for both novice and experienced cryptocurrency enthusiasts, providing a user-friendly platform to explore and understand the dynamic world of cryptocurrencies.",
    image: crypto_cosmos,
    tags: [
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
      { name: "JavaScript", icon: js },
      { name: "React JS", icon: react },
      { name: "Visual Studio Code", icon: vscode },
      { name: "Git", icon: git },
      { name: "Github", icon: github },
      { name: "NPM", icon: npm },
      { name: "Vite", icon: vite },
      { name: "Vercel", icon: vercel },
      { name: "CoinGecko", icon: coingecko },
    ],
    source: "",
    demo: "https://cryptocosmos.vercel.app/",
    status: "completed",
  },
  {
    id: 4,
    title: "2nd Personal Portfolio Website",
    date: "January 2025 - Present",
    description:
      "This portfolio website is a meticulously crafted online showcase built with TypeScript, Next.js, and Tailwind CSS, ensuring high code quality, optimal performance, and a visually stunning user experience. Leveraging the power of Framer Motion, the website incorporates smooth and engaging animations that enhance user interaction and create a dynamic and immersive presentation. Built with a focus on accessibility and user-friendliness, the website utilizes the Simplicity design system to maintain a consistent and elegant aesthetic across all pages. Furthermore, the website is fully responsive, adapting seamlessly to any screen size for an optimal viewing experience on desktops, tablets, and mobile devices.",
    image: portfolio_2,
    tags: [
      { name: "TypeScript", icon: ts },
      { name: "Next JS", icon: next },
      { name: "Tailwind CSS", icon: tailwind },
      { name: "Framer Motion", icon: framer },
      { name: "Git", icon: git },
      { name: "Github", icon: github },
      { name: "Visual Studio Code", icon: vscode },
      { name: "Netlify", icon: netlify },
      { name: "NPM", icon: npm },
    ],
    source: "",
    demo: "https://miguelenriquedasalla.netlify.app/",
    status: "inprogress",
  },
  {
    id: 3,
    title: "Job Portal",
    date: "January 2025 - Present",
    description:
      "This job portal is a full-stack web application developed using the MERN stack, comprising MongoDB, Express.js, React.js, and Node.js. It provides a user-friendly platform for job seekers to browse and apply for available positions, while enabling employers to easily post job openings and manage applications. The application leverages the power of React.js for a dynamic and interactive user interface, enhanced by the sleek and modern styling of Tailwind CSS. By utilizing the MERN stack and a robust database like MongoDB, this job portal offers a scalable and efficient solution for connecting job seekers with employers in the digital age.",
    image: job_portal,
    tags: [
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
      { name: "JavaScript", icon: js },
      { name: "Tailwind CSS", icon: tailwind },
      { name: "MongoDB", icon: mongodb },
      { name: "Express JS", icon: express },
      { name: "React JS", icon: react },
      { name: "Node JS", icon: node },
      { name: "Firebase", icon: firebase },
      { name: "Git", icon: git },
      { name: "Github", icon: github },
      { name: "NPM", icon: npm },
      { name: "Vite", icon: vite },
      { name: "Visual Studio Code", icon: vscode },
    ],
    source: "",
    demo: "",
    status: "completed",
  },
  {
    id: 2,
    title: "1st Personal Portfolio Website",
    date: "November 2024 - December 2024",
    description:
      "This portfolio website is a visually captivating and immersive online showcase built with React JS, styled-components, Framer Motion, Three.js, and Material UI. Designed with a focus on user experience, the website is fully responsive across all devices, ensuring seamless viewing on desktops, tablets, and smartphones. Utilizing Framer Motion, I've incorporated smooth and engaging animations that bring the portfolio to life, while Three.js adds a touch of interactive 3D elements. Material UI provides a consistent and professional aesthetic, further enhancing the overall user experience.",
    image: portfolio_1,
    tags: [
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
      { name: "JavaScript", icon: js },
      { name: "React JS", icon: react },
      { name: "Styled Components", icon: styled },
      { name: "Three JS", icon: three },
      { name: "Material UI", icon: mui },
      { name: "Visual Studio Code", icon: vscode },
      { name: "Git", icon: git },
      { name: "Github", icon: github },
      { name: "NPM", icon: npm },
    ],
    source: "https://github.com/akosikhada/akosikhada.github.io.git",
    demo: "https://akosikhada.github.io/",
    status: "inprogress",
  },
  {
    id: 1,
    title: "UNILINK - Student Information System and Course Scheduling",
    date: "September 2024 - December 2024",
    description:
      "The UNILINK: Academic Community Web Application is an interactive, web-based platform designed specifically for academic institutions Its primary goal is to enhance the management of student information, streamline course scheduling, and facilitate accurate grade viewing. Acting as a comprehensive Student Information System (SIS), UNILINK unites essential academic management tasks into a single, integrated platform. A subsystem of the UNILINK: Academic Community Web Application, designed to streamline student information management and enhance administrative processes.",
    image: unilink,
    tags: [
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
      { name: "JavaScript", icon: js },
      { name: "Bootstrap", icon: bootstrap },
      { name: "PHP", icon: php },
      { name: "MySQL", icon: mysql },
      { name: "Visual Studio Code", icon: vscode },
      { name: "Git", icon: git },
      { name: "Github", icon: github },
    ],
    source: "",
    demo: "",
    status: "completed",
  },
  {
    id: 0,
    title: "KOPIBARA",
    date: "September 2024 - December 2024",
    description:
      "KOPIBARA is a modern web-based coffee ordering system developed by the KPL Team as part of the IPT102 - Integrative Programming and Technologies 2 course. Built with ASP.NET Core 8.0, it offers a seamless experience for customers to browse and order a variety of coffee beverages, including both hot and iced options. KOPIBARA empowers customers with a secure and convenient payment gateway powered by Paymongo, ensuring a smooth and hassle-free checkout process. Additionally, the system leverages Entity Framework Core to streamline data access and manipulation, facilitating efficient order management and inventory control.",
    image: kopibara,
    tags: [
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
      { name: "JavaScript", icon: js },
      { name: "Bootstrap", icon: bootstrap },
      { name: ".NET", icon: dotnet },
      { name: "C#", icon: csharp },
      { name: "SQL Server", icon: sqlserver },
      { name: "PayMongo", icon: paymongo },
      { name: "Visual Studio", icon: visualstudio },
      { name: "Git", icon: git },
      { name: "Github", icon: github },
    ],
    source: "",
    demo: "",
    status: "completed",
  },
];
