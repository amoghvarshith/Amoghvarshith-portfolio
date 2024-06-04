import React from "react";
// import { MdDesignServices } from "react-icons/md";
import { FiCodesandbox } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";
import { FaComputer } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
import { HiComputerDesktop } from "react-icons/hi2";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          My <span className="green">services</span>
        </h4>
        <h1>I Am Good At</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={FaComputer}

            title={"web devoloper"}
            disc={`Utilize JavaScript  its frameworks/libraries (such as React.js) to create dynamic user experiences.Building dynamic user interfaces. `}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={SiMysql}
            title={"My Sql Developer"}
            disc={`Advanced knowledge of SQL and experience with MySQL, including query writing, joins, subqueries, and stored procedures`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={HiComputerDesktop }
            title={"FUll Stack Developer"}
            disc={`Knowledge on Java Full Stack Developement on tools such as HTML, CSS, JavaScript and frameworks like Angular.`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
