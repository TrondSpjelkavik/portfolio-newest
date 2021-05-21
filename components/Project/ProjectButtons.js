import styled from "styled-components";

import { FaGithub } from "react-icons/fa";

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  z-index: 9;
`;

const GithubIcon = styled.div`
  font-size: 32px;
  color: white;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    color: #eb5e43;
  }
`;

const VisitPage = styled.button`
  background: transparent;
  border: none;
  margin-left: 20px;
  border: 2px solid #eb5e43;
  color: white;
  font-size: 18px;
  padding: 0.5rem 0.7rem 0.5rem 0.7rem;
  border-radius: 30px;
  &:hover {
    background: linear-gradient(to left, #eb5e43 60%, transparent 40%) right;
    background-size: 200%;
    transition: 0.4s ease-out;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }
`;

function ProjectButtons({ site, github }) {
  function openGithub() {
    window.open(github);
  }

  return (
    <>
      <ButtonContainer>
        <GithubIcon onClick={openGithub}>
          <FaGithub />
        </GithubIcon>
        <a href={site} target="_blank" rel="noopener">
          <VisitPage>Visit project</VisitPage>
        </a>
      </ButtonContainer>
    </>
  );
}

export default ProjectButtons;

ProjectButtons.defaultProps = {
  site: "https://t-dev.no/spacex-microsite/",
  github: "https://github.com/TrondSpjelkavik/project-exam-1",
};
