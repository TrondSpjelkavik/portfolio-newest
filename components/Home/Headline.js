import ProjectButton from "./ProjectButton";
import Animate from "./Animate";

import styled from "styled-components";

const HeadlineContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 50px;
  color: white;
  z-index: 10;
`;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;

const MainHeadline = styled.h1`
  font-size: 42px;
  z-index: 10;
  @media (max-width: 390px) {
    font-size: 32px;
  }
`;

const SubHeadline = styled.h2`
  font-size: 38px;
  z-index: 10;
  font-family: "Inconsolata", monospace;
  @media (max-width: 390px) {
    font-size: 28px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

function Headline() {
  return (
    <Container>
      <HeadlineContainer>
        <MainHeadline>HELLO FLORENT</MainHeadline>
        <SubHeadline>to</SubHeadline>
        <SubHeadline>FULL STACK DEVELOPER</SubHeadline>
        <ButtonContainer>
          <ProjectButton></ProjectButton>

          <Animate />
        </ButtonContainer>
      </HeadlineContainer>
    </Container>
  );
}

export default Headline;
