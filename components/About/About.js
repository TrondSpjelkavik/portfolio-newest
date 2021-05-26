import SkillChart from "./SkillChart";
import Profile from "./Profile";
import Summary from "./Summary";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  max-width: 950px;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  margin: 0 auto;
  @media (max-width: 1090px) {
    flex-direction: column;
    height: 1600px !important;
    justify-content: center;
  }
  @media (max-height: 888px) {
    height: 888px;
  }
`;

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 700px;
  justify-content: space-between;
  @media (max-width: 1090px) {
    margin-top: 50px;
  }
  @media (max-width: 650px) {
    height: 850px;
  }
`;

function About() {
  return (
    <Container>
      <Profile />
      <AboutContainer>
        <Summary />
        <SkillChart />
      </AboutContainer>
    </Container>
  );
}

export default About;
