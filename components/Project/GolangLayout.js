import GolangText from "./GolangText";
import ProjectImage from "./ProjectImage";
import { Container, ContentContainer } from "./SpacexLayout";

function GolangLayout() {
  return (
    <Container>
      <ContentContainer>
        <GolangText />
        <ProjectImage src="/golang-view.svg" alt="Golang Database" />
      </ContentContainer>
    </Container>
  );
}

export default GolangLayout;
