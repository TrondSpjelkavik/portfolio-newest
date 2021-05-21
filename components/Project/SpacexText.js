import styled from "styled-components";
import { HeadlineUnderline } from "../Projects/Projects";
import ProjectButtons from "./ProjectButtons";

export const ProjectContent = styled.div`
  height: 360px;
  width: 480px;
  @media (max-width: 500px) {
    width: 320px;
    margin: 0 5px;
  }
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 500px) {
    height: 400px;
  }
`;

export const ProjectHeadline = styled.h1`
  color: white;
`;

export const ProjectParagraphContainer = styled.div`
display: flex:
flex-direction: column;


`;

export const ProjectParagraph = styled.p`
  padding-top: 10px;
  color: white;
  font-family: "Inconsolata", monospace;
`;

function SpacexText() {
  return (
    <>
      <ProjectContent>
        <ProjectContainer>
          <ProjectHeadline>
            Space<HeadlineUnderline>X Mic</HeadlineUnderline>rosite
          </ProjectHeadline>
          <ProjectParagraphContainer>
            <ProjectParagraph>
              This project was the exam after one year at Noroff School of
              Digital Media
            </ProjectParagraph>
            <ProjectParagraph>
              The assignment was to build a microsite for SpaceX or NASA. The
              focus was on space technology. A microsite is a branded,
              self-contained site, usually on its own domain, with a single
              purpose and a limited number of pages.
            </ProjectParagraph>
            <ProjectParagraph>
              {" "}
              The assignment was to build a microsite for SpaceX or NASA. The
              focus was on space technology. A microsite is a branded,
              self-contained site, usually on its own domain, with a single
              purpose and a limited number of pages.
            </ProjectParagraph>
          </ProjectParagraphContainer>
          <ProjectButtons />
        </ProjectContainer>
      </ProjectContent>
    </>
  );
}

export default SpacexText;
