import Image from "next/image";

import { GrTwitter, GrFacebook, GrInstagram } from "react-icons/gr";
import { FaCity, FaUserAlt, FaFilePdf } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GiDiploma } from "react-icons/gi";
import { BsChatDotsFill } from "react-icons/bs";

import styled from "styled-components";

const ProfileBox = styled.aside`
  height: 700px;
  background: #405566;
  width: 300px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1090px) {
    height: 550px;
    width: 500px;
    border-radius: 0px;
  }
  @media (max-width: 650px) {
    width: 320px;
  }
`;

const ProfileImage = styled.div`
  position: relative;
  height: 200px;
  width: 200px;
  margin: 0 auto;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;

  height: 650px;
  justify-content: space-evenly;
  color: white;
  @media (max-width: 1090px) {
    height: 550px;
  }
`;

const ContactInfo = styled.div`
  display: flex;

  font-size: 22px;

  align-items: center;
`;

const ContactContent = styled.div`
  font-size: 16px;
  font-family: "Inconsolata", monospace;
  position: relative;
  left: 20px;
`;

const SocialContainer = styled.div`
  background: #f8f8f8;
  width: 150px;
  padding: 0.3rem 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 10px;
`;

function Profile() {
  function OpenFacebook() {
    window.open("https://www.facebook.com/Trondchivu/");
  }
  function OpenTwitter() {
    window.open("https://twitter.com/TrondSpjelkavik/");
  }
  function OpenInstagram() {
    window.open("https://www.instagram.com/trondspjelkavik/");
  }

  return (
    <>
      <ProfileBox>
        <ProfileInfo>
          <ProfileImage>
            <Image
              src="/trond.png"
              layout="fill"
              alt="Trond Fuglseth Spjelkavik"
              title="Trond Fuglseth Spjelkavik"
            />
          </ProfileImage>
          <ContactInfo>
            <FaUserAlt />
            <ContactContent>35</ContactContent>
          </ContactInfo>
          <ContactInfo>
            <FaCity />
            <ContactContent>Trondheim</ContactContent>
          </ContactInfo>
          <ContactInfo>
            <FaFilePdf />
            <ContactContent>
              {" "}
              <a
                href="https://t-dev.no/resume/CV.pdf"
                style={{ textDecoration: "underline" }}
              >
                Resume
              </a>{" "}
            </ContactContent>
          </ContactInfo>
          <ContactInfo>
            <MdEmail />
            <ContactContent>
              <a
                href="mailto: trond.spjelkavik@gmail.com"
                style={{ textDecoration: "underline" }}
              >
                trond.spjelkavik@gmail.com
              </a>
            </ContactContent>
          </ContactInfo>
          <ContactInfo>
            <GiDiploma />
            <ContactContent>
              <a
                href="https://t-dev.no/resume/vitnemaal.png"
                style={{ textDecoration: "underline" }}
              >
                Grades
              </a>
            </ContactContent>
          </ContactInfo>
          <ContactInfo>
            <BsChatDotsFill />
            <ContactContent>
              <SocialContainer>
                <GrFacebook
                  color="#4267B2"
                  fontSize="24px"
                  cursor="pointer"
                  onClick={OpenFacebook}
                  title="https://www.facebook.com/Trondchivu/"
                  alt="facebook logo"
                />
                <GrInstagram
                  color="#d6249f"
                  fontSize="24px"
                  cursor="pointer"
                  onClick={OpenInstagram}
                  title="https://www.instagram.com/trondspjelkavik/"
                  alt="instagram logo"
                />
                <GrTwitter
                  color="#1DA1F2"
                  fontSize="24px"
                  cursor="pointer"
                  onClick={OpenTwitter}
                  title="https://twitter.com/TrondSpjelkavik"
                  alt="twitter logo"
                />
              </SocialContainer>
            </ContactContent>
          </ContactInfo>
        </ProfileInfo>
      </ProfileBox>
    </>
  );
}

export default Profile;
