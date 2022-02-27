import { useState } from "react";
import {
  SiJavascript,
  SiMysql,
  SiReact,
  SiSass,
  SiVueDotJs,
} from "react-icons/si";
import { CgFigma, CgGoogle } from "react-icons/cg";
import { FaGit, FaNodeJs } from "react-icons/fa";

import styled from "styled-components";

const ChartBox = styled.div`
  background: #405566;
  width: 600px;
  position: relative;
  height: 300px;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  @media (max-width: 1090px) {
    width: 500px;
    margin: 0 auto;
  }
  @media (max-width: 650px) {
    width: 320px;
  }
`;

const Skill = styled.div`
  width: 40px;
  background: #eb5e43;
  position: relative;
  @media (max-width: 650px) {
    width: 30px;
  }
`;

const SkillType = styled.p`
  transform: rotate(-90deg);
  position: absolute;
  bottom: 30px;
  width: 100%;
  color: black;
  font-family: "Inconsolata", monospace;
  white-space: nowrap;
`;

const SkillLogo = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  font-size: 28px;
  color: black;
  @media (max-width: 650px) {
    font-size: 22px;
  }
`;

const Beginner = styled.p`
  color: white;
  position: absolute;
  right: -65px;
  bottom: 0;
  @media (max-width: 468px) {
    display: none;
  }
`;

const Expert = styled.p`
  color: white;
  position: absolute;
  right: -50px;
  top: 0;
  @media (max-width: 468px) {
    display: none;
  }
`;

const HoverPercent = styled.p`
  position: absolute;
  color: white;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  font-family: "Inconsolata", monospace;
  white-space: nowrap;
`;

function SkillChart() {
  const [hover, setHover] = useState(false);

  const [skill, setSkill] = useState([
    {
      id: 1,
      type: "JavaScript",
      skill: 80,
      logo: <SiJavascript />,
    },
    {
      id: 2,
      type: "React / Next",
      skill: 70,
      logo: <SiReact />,
    },
    {
      id: 3,
      type: "Vuejs",
      skill: 75,
      logo: <SiVueDotJs />,
    },
    {
      id: 4,
      type: "Golang",
      skill: 55,
      logo: <CgGoogle />,
    },
    {
      id: 5,
      type: "Figma",
      skill: 80,
      logo: <CgFigma />,
    },
    {
      id: 6,
      type: "Sass",
      skill: 85,
      logo: <SiSass />,
    },
    {
      id: 7,
      type: "Git",
      skill: 70,
      logo: <FaGit />,
    },
    {
      id: 8,
      type: "Node.js",
      skill: 55,
      logo: <FaNodeJs />,
    },
    {
      id: 9,
      type: "SQL",
      skill: 40,
      logo: <SiMysql />,
    },
  ]);

  return (
    <>
      <ChartBox>
        {skill.map((skill) => (
          <Skill
            key={skill.id}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{ height: `${skill.skill}%` }}
          >
            {hover && <HoverPercent>{skill.skill} %</HoverPercent>}
            <SkillLogo title={skill.type} alt={skill.type}>
              {skill.logo}
            </SkillLogo>
            <SkillType>{skill.type}</SkillType>
          </Skill>
        ))}
        <Beginner>Beginner</Beginner>
        <Expert>Expert</Expert>
      </ChartBox>
    </>
  );
}

export default SkillChart;
