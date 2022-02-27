import styled from "styled-components";

const SummaryBox = styled.div`
  width: 600px;
  height: 360px;
  background: #405566;
  @media (max-width: 1090px) {
    width: 500px;
    margin: 0 auto;
  }
  @media (max-width: 650px) {
    width: 320px;
    height: 550px;
  }
`;

const SummaryContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  height: 360px;
  justify-content: space-around;
  @media (max-width: 650px) {
    height: 550px;
  }
`;

const SummaryHeadline = styled.h1`
  color: white;
`;

const SummaryParagraph = styled.p`
  color: white;
  font-family: "Inconsolata", monospace;
`;

function Summary() {
  return (
    <SummaryBox>
      <SummaryContent>
        <SummaryHeadline>About Me</SummaryHeadline>
        <SummaryParagraph>
          Currently working as Software Developer @{" "}
          <a href="https://www.hent.no" style={{ textDecoration: "underline" }}>
            HENT AS.
          </a>{" "}
          Developing inhouse software HENT Core. The application is used by
          1000+ user every day
        </SummaryParagraph>
        <SummaryParagraph>
          I want to make a better web. One that is fast, easy to use, accessible
          to all and error-free. Started my journey to become a developer in
          october 2019, and after 14 years in sales I have found my passion.
          Learning new technologies and creating new projects are features I
          love in this profession.
        </SummaryParagraph>
        <SummaryParagraph>
          I am currently learning Go - golang along with my studies. I believe
          Go will become a very important language in the future.
        </SummaryParagraph>
        <SummaryParagraph>
          My goal is to be a Full-Stack Developer, because I like to know and
          understand what drives an application.
        </SummaryParagraph>
      </SummaryContent>
    </SummaryBox>
  );
}

export default Summary;
