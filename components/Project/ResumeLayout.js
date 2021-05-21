import ResumeText from "./ResumeText";
import ProjectImage from "./ProjectImage";
import { Container, ContentContainer } from "./SpacexLayout";

function ResumeLayout() {
  return (
    <Container>
      <ContentContainer>
        <ResumeText />
        <ProjectImage />
      </ContentContainer>
    </Container>
  );
}

export default ResumeLayout;
