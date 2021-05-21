import Image from "next/image";

import styled from "styled-components";

const ProjectImageBox = styled.div`
  height: 400px;
  width: 400px;
  position: relative;
  @media (max-width: 500px) {
    width: 300px;
  }
`;

function ProjectImage({ src, alt, title }) {
  return (
    <>
      <ProjectImageBox>
        <Image src={src} layout="fill" alt={alt}></Image>
      </ProjectImageBox>
    </>
  );
}

export default ProjectImage;

ProjectImage.defaultProps = {
  src: "/dincv-responsive.svg",
  alt: "dincv.net responsive",
};
