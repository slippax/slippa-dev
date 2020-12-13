import styled, { keyframes } from 'styled-components';
import { useRef } from 'react';
import {Project, ProjectAlt} from './Project';
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
          <Subtitle>Works.</Subtitle>
<Project title="Virus-Trackr" text="Realtime COVID19 data fetched and displayed with simple views. Data fetched from covid19api.com." tech="React" tech2="Styled-Components"/>
<ProjectAlt title="Type King" text="Realtime COVID19 data fetched and displayed with simple views. Data fetched from covid19api.com." tech="React" tech2="Styled-Components"/>
<Project title="Todoz" text="Realtime COVID19 data fetched and displayed with simple views. Data fetched from covid19api.com." tech="React" tech2="Styled-Components"/>
<ProjectAlt title="Weather Grabbr" text="Realtime COVID19 data fetched and displayed with simple views. Data fetched from covid19api.com." tech="React" tech2="Styled-Components"/>
        </Container>
      </Wrapper>
      <div ref={myRef}></div>
    </div>
  );
}