import Project from "./Project";

import styled from "styled-components";

const ProjectsContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 800px) {
    height: 1200px;
  }
`;

const Headline = styled.h1`
  color: white;
  font-size: 42px;
  padding-bottom: 50px;
`;

export const HeadlineUnderline = styled.span`
  border-bottom: 6px solid #eb5e43;
`;

function Projects() {
  return (
    <ProjectsContainer>
      <Headline>
        Pr<HeadlineUnderline>ojec</HeadlineUnderline>ts
      </Headline>

      <Project></Project>
    </ProjectsContainer>
  );
}

export default Projects;
