import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">SANJITH V </span>
            from <span className="purple"> Bengaluru,India.</span>
            <br />
            I am currently BCA student seeking internships opportunity to gain practical experience in the field of programming. Passionate about HTML,CSS,Java,are fundamental languages in the world of web development and programming. They offer a great foundation for building websites, web applications. I Stay updated on the latest trends,programming languages and industry practices. Follow tech blogs, I am excited about the future of technology.
            <br />
            I have completed my BCA in New Horizon College 
.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Cricket
              <li className="about-activity">
              <ImPointRight /> Modeling
              </li>  
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">SANJITH</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
