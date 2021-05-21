import styled from "styled-components";

const SummaryBox = styled.div`
  width: 600px;
  height: 350px;
  background: #405566;
  @media (max-width: 1090px) {
    width: 500px;
    margin: 0 auto;
  }
  @media (max-width: 650px) {
    width: 320px;
    height: 500px;
  }
`;

const SummaryContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  height: 340px;
  justify-content: space-around;
  @media (max-width: 650px) {
    height: 500px;
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
          Currently studying Front-End Developer @ Noroff - School of technology
          and digital media.
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
