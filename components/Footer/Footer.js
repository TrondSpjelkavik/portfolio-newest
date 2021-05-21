import { FaLinkedin, FaGithub } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

import styled from "styled-components";

const FooterContainer = styled.footer`
  position: absolute;
  bottom: 20px;

  @media (max-width: 1090px) {
    top: 20px;
    width: 150px;
    height: 40px;
    z-index: 9999;
  }
`;

const FooterList = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
`;

const FooterLists = styled.li`
  margin-left: 20px;
  font-size: 32px;
  color: white;
  cursor: pointer;
  &:hover {
    color: #eb5e43;
  }
`;

const FooterTextList = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  margin-left: 20px;
  color: white;
  font-family: "Inconsolata", monospace;
  font-size: 14px;
  @media (max-width: 1090px) {
    display: none;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterList>
        <FooterLists>
          <a
            href="https://www.linkedin.com/in/trondspjelkavik/"
            target="_blank"
            rel="noopener"
          >
            <FaLinkedin alt="linkedin logo" title="linkedin logo"></FaLinkedin>
          </a>
        </FooterLists>
        <FooterLists>
          <a
            href="https://github.com/TrondSpjelkavik/"
            target="_blank"
            rel="noopener"
          >
            <FaGithub alt="github logo" title="github logo"></FaGithub>
          </a>
        </FooterLists>
        <FooterLists>
          <a href="mailto: trond.spjelkavik@gmail.com">
            <GrMail alt="mail icon" title="mail icon"></GrMail>
          </a>
        </FooterLists>
        <FooterTextList>
          <p>Developed by Trond Fuglseth Spjelkavik</p>
        </FooterTextList>
      </FooterList>
    </FooterContainer>
  );
}

export default Footer;
