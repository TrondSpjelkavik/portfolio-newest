import SpacexText from "./SpacexText";
import ProjectImage from "./ProjectImage";

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 1000px;
  min-height: 100vh;
  width: 100%;
  @media (max-height: 800px) {
    min-height: 800px;
  }
  @media (max-width: 800px) {
    height: 1100px;
  }
  @media (max-width: 500px) {
    height: 1200px;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    height: 800px;
  }
  @media (max-width: 500px) {
    height: 850px;
  }
`;

function SpacexLayout() {
  return (
    <Container>
      <ContentContainer>
        <SpacexText />
        <ProjectImage
          src="/spacex-view.svg"
          alt="spacex microsite responsive"
        />
      </ContentContainer>
    </Container>
  );
}

export default SpacexLayout;
