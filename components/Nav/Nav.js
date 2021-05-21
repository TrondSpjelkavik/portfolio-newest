import NavLinks from "./NavLinks";
import styled from "styled-components";

const NavContainer = styled.nav`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  height: 80px;
  z-index: 999;
`;

function Nav() {
  return (
    <NavContainer>
      <NavLinks></NavLinks>
    </NavContainer>
  );
}

export default Nav;
