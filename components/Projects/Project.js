import styled from "styled-components";
import Link from "next/link";

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1000px;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const ProjectContainer = styled.div`
  width: 250px;
  height: 250px;
  background: #405566;
  border-radius: 25px;
  display: flex;
  &:hover {
    background: linear-gradient(to left, #eb5e43 60%, transparent 40%) right;
    background-size: 200%;
    transition: 0.4s ease-out;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }
`;
const ProjectsBox = styled.div`
  display: flex;
  max-width: 800px;
  width: 100%;
  justify-content: space-between;
  @media (max-width: 800px) {
    flex-direction: column;
    height: 800px;
    align-items: center;
  }
`;

const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  align-items: center;
  justify-content: space-around;
`;

const ImageFoo = styled.img`
  width: 40px;
  height: 40px;
  position: absolute;
  left: 10px;
  top: 10px;
`;

const ImageFoo2 = styled.img`
  width: 150px;
  height: 150px;
  z-index: 99;
`;

const ImageFoo3 = styled.img`
  width: 50px;
  height: 50px;
  position: absolute;
  left: 10px;
  top: 10px;
`;

const ImageFoo4 = styled.img`
  width: 120px;
  height: 150px;
  padding-top: 40px;
  z-index: 99;
`;

const SubHeadline = styled.h2`
  color: white;
`;

function Project() {
  return (
    <>
      <Container>
        <ProjectsBox>
          <Link href="/spacex">
            <ProjectContainer>
              <ProjectContent>
                <ImageFoo src="./jslogo.png" alt="javascript logo"></ImageFoo>
                <ImageFoo2
                  src="./rocket2.svg"
                  alt="drawn space rocket"
                ></ImageFoo2>
                <SubHeadline>SpaceX Microsite</SubHeadline>
              </ProjectContent>
            </ProjectContainer>
          </Link>
          <Link href="/golang">
            <ProjectContainer>
              <ProjectContent>
                <ImageFoo3 src="./gologo.svg" alt="golang logo"></ImageFoo3>
                <ImageFoo4 src="./gopher2.svg" alt="golang gopher"></ImageFoo4>
                <SubHeadline>API & CRUD database</SubHeadline>
              </ProjectContent>
            </ProjectContainer>
          </Link>
          <Link href="/build">
            <ProjectContainer>
              <ProjectContent>
                <ImageFoo3 src="./nextjslogo.svg" alt="nextjs logo"></ImageFoo3>
                <ImageFoo4 src="./vercel.svg" alt="vercel logo"></ImageFoo4>
                <SubHeadline>Build your resume</SubHeadline>
              </ProjectContent>
            </ProjectContainer>
          </Link>
        </ProjectsBox>
      </Container>
    </>
  );
}

export default Project;
