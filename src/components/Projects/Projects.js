import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="DevopsFinal"              
              description="Related to a Shoe Website Shoe Showcasing Website for Nike templateFeatured product section highlighting the latest releases or best-selling models Product name, description,and price."
              ghLink="https://github.com/devopsnhc10/DevopsFinal"
              demoLink="https://nike-shoe-store.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="NodeMCU_Relay"
              description="This project demonstrates the creation of Ultrasonic.NodeMCU_ relay esp8266.These are the physical objects embedded with sensors, actuators, and connectivity to collect and transmit data,sensors gather data from the environment while actuators perform actions based on received data."
              ghLink="https://github.com/devopsnhc10/NodeMCU_Relay"
              demoLink=" https://github.com/devopsnhc10/NodeMCU_Relay/assets/126224105/519d3488-4039-4d53-8efe-dc8e41cbac47 "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Tic-Tac-Toe"
              description="Tic-Tac-Toe is a classic two-player game that is easy to learn and fun to play. It's often one of the first games.Children learn due to its simplicity, yet it also offers strategic depth that can be appreciated by players of all ages. The game is played on a 3x3 grid."
              ghLink="https://github.com/devopsnhc10/Tic-Tac-Toe"
              demoLink=" https://furip0x.github.io/tic_tac_toe/ "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Weather"
              description="The purpose of this small project is to display the current weather for a user-specified location.Pure javascript, basic exercise. The use of science and technology to forecast the atmospheric conditions for a certain place and time is known as weather forecasting.."
              ghLink="https://github.com/devopsnhc10/Weather"
              demoLink=" http://127.0.0.1:5500/index.html "
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
