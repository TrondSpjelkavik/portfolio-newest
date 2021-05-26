import { HeadlineUnderline } from "../Projects/Projects";
import ProjectButtons from "./ProjectButtons";
import {
  ProjectContent,
  ProjectContainer,
  ProjectHeadline,
  ProjectParagraphContainer,
  ProjectParagraph,
} from "./SpacexText";

function GolangText() {
  return (
    <ProjectContent>
      <ProjectContainer>
        <ProjectHeadline>
          G<HeadlineUnderline>o AP</HeadlineUnderline>I
        </ProjectHeadline>
        <ProjectParagraphContainer>
          <ProjectParagraph>
            I am currently working on making a CRUD database and a API that
            works with the build a resume frontend.
          </ProjectParagraph>
          <ProjectParagraph>
            The main propose of this API is to store and interact with the login
            / signup feature. The security uses the{" "}
            <a href="golang.org/x/crypto/bcrypt" target="_blank">
              crypto
            </a>{" "}
            package and for the database i use the{" "}
            <a href="github.com/jinzhu/gorm" target="_blank">
              gorm
            </a>{" "}
            package.
          </ProjectParagraph>
          <ProjectParagraph>
            {" "}
            The Go language is advanced and reliable, offering great built-in
            ways to handle error. It is efficient, compiling down to one binary.
            Go enhances the availability and reliability of services and
            increases code readability through its simplicity.
          </ProjectParagraph>
        </ProjectParagraphContainer>
        <ProjectButtons
          site="https://github.com/TrondSpjelkavik/golang-backend"
          github="https://github.com/TrondSpjelkavik/golang-backend"
        />
      </ProjectContainer>
    </ProjectContent>
  );
}

export default GolangText;
