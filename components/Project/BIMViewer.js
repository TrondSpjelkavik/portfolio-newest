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
            BI<HeadlineUnderline>M Vie</HeadlineUnderline>wer
          </ProjectHeadline>
          <ProjectParagraphContainer>
            <ProjectParagraph>
              I am currently tech lead on a project that lets the user view and interact with BIM models.
              The project is built with Vue.js, and the models are rendered with Novorender engine. 
            </ProjectParagraph>
            <ProjectParagraph>
            The BIM Viewer project is a powerful tool that allows users to not only view BIM models, 
            but also interact with them by registering events. This means that users can add comments and annotations,
             track changes, and even simulate construction scenarios. The software also has a wide range of features, 
             including the ability to view multiple BIM models at once, navigate through the model using various views, 
             and perform clash detection.
            </ProjectParagraph>
          </ProjectParagraphContainer>
          <ProjectButtons
            site="https://www.hent.no/"
            github="#"
            buttonLabel="HENT"
          />
        </ProjectContainer>
      </ProjectContent>
    </>
  );
}

export default ResumeText;
