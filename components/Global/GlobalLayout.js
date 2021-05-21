import Meta from "./Meta";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

import styled from "styled-components";

const GlobalLayoutContainer = styled.main`
  background: #343641;
  min-height: 100vh;
  font-family: "Rambla", sans-serif;
`;

function GlobalLayout({ children }) {
  return (
    <>
      <Meta></Meta>

      <GlobalLayoutContainer>
        <Nav></Nav>
        {children}
      </GlobalLayoutContainer>
      <Footer></Footer>
    </>
  );
}

export default GlobalLayout;
