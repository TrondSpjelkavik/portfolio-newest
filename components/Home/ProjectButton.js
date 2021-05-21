import styled from "styled-components";
import Link from "next/link";

const Button = styled.button`
background: transparent;
border: none;
padding 1rem 1.4rem 1rem 1.4rem;
border: 2px solid #EB5E43;
color: white;
font-size: 20px;

border-radius: 30px;
&:hover {
    background: linear-gradient(to left, #EB5E43 60%, transparent 40%) right;
    background-size: 200%;
    transition: .4s ease-out;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
}
@media (max-width: 390px) {
    font-size: 18px;
  }
`;

function ProjectButton() {
  return (
    <Link href="/projects">
      <Button>View my works</Button>
    </Link>
  );
}

export default ProjectButton;
