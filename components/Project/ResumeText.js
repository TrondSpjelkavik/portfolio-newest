import { HeadlineUnderline } from "../Projects/Projects";
import ProjectButtons from "./ProjectButtons";
import {
  ProjectContent,
  ProjectContainer,
  ProjectHeadline,
  ProjectParagraphContainer,
  ProjectParagraph,
} from "./SpacexText";

function ResumeText() {
  return (
    <>
      <ProjectContent>
        <ProjectContainer>
          <ProjectHeadline>
            Buil<HeadlineUnderline>d a re</HeadlineUnderline>sume
          </ProjectHeadline>
          <ProjectParagraphContainer>
            <ProjectParagraph>
              Build a resume is a personal project. The idea was to create a
              site that lets the user choose between different templates to
              build their own resume
            </ProjectParagraph>
            <ProjectParagraph>
              The project is currently under development, and I used next.js and
              styled components to build the site. The API is built with Golang,
              and hosted on Google Cloud.
            </ProjectParagraph>
            <ProjectParagraph>
              The user can design their own resume with useState hooks and print
              or save the pdf. I plan to add more templates and make a login /
              signup feature so the user can save their resume on the site.
            </ProjectParagraph>
          </ProjectParagraphContainer>
          <ProjectButtons
            site="https://dincv.net/"
            github="https://github.com/TrondSpjelkavik/build-cv"
          />
        </ProjectContainer>
      </ProjectContent>
    </>
  );
}

export default ResumeText;
