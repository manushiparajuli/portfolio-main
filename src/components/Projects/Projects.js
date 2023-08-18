import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import { PROJECTS } from "../../Constants";

function Projects() {
  return (
    <div className="section" id="projects">
      <Container>
        <h2 className="section-title">
          My Recent <span className="purple">Projects</span>
        </h2>
        <p className="section-subtitle">
          Here are a few projects I've worked on recently.
        </p>
        <Row className="justify-content-center">
          {PROJECTS.map((project, index) => (
            <Col lg={6} md={9} key={index}>
              <ProjectCard
                imgPath={project.image}
                technologyUsed={project.technologyUsed}
                isBlog={false}
                title={project.name}
                description={project.description}
                link={project.url}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
