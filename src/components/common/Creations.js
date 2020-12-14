import styled, { keyframes } from 'styled-components';
import { useRef } from 'react';
import { Project, ProjectAlt } from './Project';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
const FadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
display:flex;
justify-content:center;
align-items:flex-start;
`;

const Container = styled.div`
padding: 2em;
@media(min-width:700px){
  max-width: 700px;
  font-size:1.2em;
}
`;


const Subtitle = styled.p`
opacity:0;
font-size: 2.5em;
margin-top: 0;
font-weight: 600;
color: ${p => p.theme.secondaryColor};
animation-name:${FadeIn};
animation-duration: 2s;
animation-fill-mode:forwards;
margin-bottom:40px;
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
          <Zoom>
          <Project title="Virus-Trackr" text="Realtime COVID19 data fetched and displayed with simple views. Data fetched from covid19api.com." tech="React" tech2="Styled-Components" linkclick={() => window.open("https://slippax.github.io/virus-trackr")} gitclick={() => window.open("https://github.com/slippax/virus-trackr")} />
          </Zoom>
          <Zoom>
          <ProjectAlt title="Type King" text="A typing speed test with leaderboard support and profile saving.  See if you can beat the top score!" tech="React" tech2="Google Firebase" linkclick={() => window.open("https://slippax.github.io/type-god")} gitclick={() => window.open("https://github.com/slippax/type-god")} />
          </Zoom>
          <Zoom>
          <Project title="Todoz" text="A modern take of to do posted notes.  On the go and completed views handled with Redux." tech="React" tech2="Redux" linkclick={() => window.open("https://slippax.github.io/todoz")} gitclick={() => window.open("https://github.com/slippax/todoz")} />
          </Zoom>
          <Zoom>
          <ProjectAlt title="Weather Grabbr" text="A weather app featuring humidity, sky conditions and much more. Search for weather data anywhere worldwide." tech="React" tech2="OpenWeather" linkclick={() => window.open("https://slippax.github.io/weather-grabbr")} gitclick={() => window.open("https://github.com/slippax/weather-grabbr")} />
          </Zoom>
          <Zoom>
          <Project title="Portfolio V1" text="My first take on a portfolio site. An interactive experience with smooth scrolling and flashy animations" tech="React" tech2="TypeScript" linkclick={() => window.open("https://slippax.github.io/my-portfolio")} gitclick={() => window.open("https://github.com/slippax/my-portfolio")} />
          </Zoom>
          <Zoom>
          <ProjectAlt title="Ez-Sens" text="An FPS sensitivity converter for popular PC game titles. Convert mouse sensitivity between a variety of games." tech="React" tech2="CSS Modules" linkclick={() => window.open("https://slippax.github.io/Ez-Sens/")} gitclick={() => window.open("https://github.com/slippax/Ez-Sens")} />
          </Zoom>
        </Container>
      </Wrapper>
      <div ref={myRef}></div>
    </div>
  );
}