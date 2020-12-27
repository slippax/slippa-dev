import styled from "styled-components";
import { useRef } from "react";
import Fade from "react-reveal/Fade";
import { SkillsBox } from "../../common/";

const Wrapper = styled.div`
  background: ${(p) => p.theme.primaryColor};
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  padding: 1em;
  padding-top: 1.5em;
  max-width: 450px;
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
  font-size: ${p=>p.alt ? '2em' : '2.5em'};
  margin-top: 0;
  font-weight: 600;
  color: ${(p) => p.theme.secondaryColor};
  margin-bottom:  ${p=>p.alt ? '0px' : '20px'};
`;


const Text = styled.p`
  opacity: 1;
  color: ${(p) => p.theme.bodyFontColor};
  font-size: 1.35em;
  font-weight: 400;
  margin-bottom: ${(p) => (p.first ? "20px" : "20px")};
  margin-top: ${(p) => (p.second ? "0px" : "0")};
`;

export const About = () => {
  let myRef = useRef();
  return (
    <div>
      <Wrapper>
        <Container>
          <Fade top>
            <Subtitle>About.</Subtitle>
            <Text>
              Hello! I'm Stephen, a front end developer based in Toronto,
              Canada.
            </Text>
            <Text>
              I enjoy creating websites and applications that live on the
              internet. My goal is to consistently provide pixel-perfect code
              that functions seamlessly.
            </Text>
            <Text>
            After graduating York University, I found a passion for using web technologies. Here are a few technologies and languages I've been working with:
            </Text>
           <Subtitle alt>Specialties.</Subtitle>
            <SkillsBox />
          </Fade>
        </Container>
      </Wrapper>
      <div ref={myRef}></div>
    </div>
  );
};
