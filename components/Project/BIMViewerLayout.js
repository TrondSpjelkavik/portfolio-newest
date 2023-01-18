import BIMViewer from "./BIMViewer";
import ProjectImage from "./ProjectImage";
import { Container, ContentContainer } from "./SpacexLayout";

function ResumeLayout() {
  return (
    <Container>
      <ContentContainer>
        <BIMViewer />
        <ProjectImage src="/bim-view.svg" alt="BIM Viewer" />
      </ContentContainer>
    </Container>
  );
}

export default ResumeLayout;
