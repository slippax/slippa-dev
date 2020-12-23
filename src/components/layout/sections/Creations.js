import styled from "styled-components";
import { useRef } from "react";
import { Project, ProjectAlt } from "../../common/Project";
import Fade from "react-reveal/Fade";
import virusimg from "../../../assets/WorkViews/virustrackr.JPG";
import virusgif from "../../../assets/WorkViews/virustrackr.gif";
import typeimg from "../../../assets/WorkViews/typeking.JPG";
import typegif from "../../../assets/WorkViews/typeking.gif";
import todoimg from "../../../assets/WorkViews/todolist.JPG";
import todogif from "../../../assets/WorkViews/todolist.gif";
import ezgif from "../../../assets/WorkViews/ezgif.gif";
import ezimg from "../../../assets/WorkViews/ezimg.JPG";
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const Container = styled.div`
  padding: 1em;
  padding-top: 1.5em;
  @media (min-width: 700px) {
    padding: 2em;
    max-width: 700px;
    font-size: 1.1em;
  }
  @media (min-width: 1000px) {
    max-width: 1000px;
    font-size: 1.2em;
  }
`;

const Subtitle = styled.p`
  opacity: 1;
  font-size: 2.5em;
  margin-top: 0;
  font-weight: 600;
  color: ${(p) => p.theme.secondaryColor};
  @media (min-width: 1000px) {
    margin-bottom: -50px;
  }
`;

export const Creations = () => {
  let myRef = useRef();
  return (
    <div>
      <Wrapper>
        <Container>
          <Fade top>
            <Subtitle>Works.</Subtitle>
          </Fade>
          <Fade left>
            <Project
              gif={virusgif}
              image={virusimg}
              title="Virus-Trackr"
              text="Realtime COVID19 data fetched and displayed with simple views. Data fetched from covid19api.com."
              tech="React"
              tech2="Styled-Components"
              linkclick={() =>
                window.open("https://slippax.github.io/virus-trackr")
              }
              gitclick={() =>
                window.open("https://github.com/slippax/virus-trackr")
              }
            />
          </Fade>
          <Fade right>
            <ProjectAlt
              gif={typegif}
              image={typeimg}
              title="Type King"
              text="A typing speed test with leaderboard support and profile saving.  See if you can beat the top score!"
              tech="React"
              tech2="Google Firebase"
              linkclick={() =>
                window.open("https://slippax.github.io/type-god")
              }
              gitclick={() =>
                window.open("https://github.com/slippax/type-god")
              }
            />
          </Fade>
          <Fade left>
            <Project
              gif={todogif}
              image={todoimg}
              title="Todoz"
              text="A modern take of to do posted notes.  On the go and completed views handled with Redux."
              tech="React"
              tech2="Redux"
              linkclick={() => window.open("https://slippax.github.io/todoz")}
              gitclick={() => window.open("https://github.com/slippax/todoz")}
            />
          </Fade>
          <Fade right>
            <ProjectAlt
              gif={ezgif}
              image={ezimg}
              title="Ez-Sens"
              text="An FPS sensitivity converter for popular PC game titles. Convert mouse sensitivity between a variety of games."
              tech="React"
              tech2="CSS Modules"
              linkclick={() =>
                window.open("https://slippax.github.io/Ez-Sens/")
              }
              gitclick={() => window.open("https://github.com/slippax/Ez-Sens")}
            />
          </Fade>

          {/* <Fade right>
          <ProjectAlt title="Weather Grabbr" text="A weather app featuring humidity, sky conditions and much more. Search for weather data anywhere worldwide." tech="React" tech2="OpenWeather" linkclick={() => window.open("https://slippax.github.io/weather-grabbr")} gitclick={() => window.open("https://github.com/slippax/weather-grabbr")} />
          </Fade>
          <Fade left>
          <Project title="Portfolio V1" text="My first take on a portfolio site. An interactive experience with smooth scrolling and flashy animations" tech="React" tech2="TypeScript" linkclick={() => window.open("https://slippax.github.io/my-portfolio")} gitclick={() => window.open("https://github.com/slippax/my-portfolio")} />
          </Fade>
           */}
        </Container>
      </Wrapper>
      <div ref={myRef}></div>
    </div>
  );
};
