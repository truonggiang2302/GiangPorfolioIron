import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import ProgressBar from "./ProgressBar";

function Skills() {
  return (
    <SkillsStyled>
      <Title title={"My Skills"} span={"my skills"} />
      <InnerLayout>
        <div className="skills">
          <ProgressBar title={"HTML5"} width={"85%"} text={"85%"} />
          <ProgressBar title={"JAVASCRIPT"} width={"85%"} text={"85%"} />
          <ProgressBar title={"CSS3"} width={"80%"} text={"80%"} />
          <ProgressBar title={"ReactJS"} width={"75%"} text={"75%"} />
          <ProgressBar title={"NodeJS"} width={"75%"} text={"75%"} />
          <ProgressBar title={"NextJS"} width={"75%"} text={"75%"} />
          <ProgressBar title={"ThreeJS"} width={"40%"} text={"40%"} />
        </div>
      </InnerLayout>
    </SkillsStyled>
  );
}

const SkillsStyled = styled.section`
  .skills {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 2rem;
    grid-column-gap: 3rem;
    @media screen and (max-width: 700px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default Skills;
