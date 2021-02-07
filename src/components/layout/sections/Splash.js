import styled from "styled-components";
import { NextButton } from "../../common/NextButton";
import { useRef } from "react";
import Fade from 'react-reveal/Zoom';

const Button = styled.div`
  text-align: center;
  margin-top: 30px;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  justify-content: center;
`;

const Container = styled.div`
  position: absolute;
  top: 19%;
  @media (min-width: 450px) {
    font-size: 1.2em;
  }
  @media (min-width: 700px) {
    font-size: 1.4em;
  }
  @media (min-width: 1000px) {
    max-width: 1000px;
    font-size: 1.5em;
  }
`;

const Title = styled.div`
  font-size: 2em;
  margin-bottom: 0;
  font-weight: 300;
`;

const NameBox = styled.div`
  display: flex;
`;

const Subtitle = styled.div`
margin-bottom: 40px;
  font-size: 2.5em;
  margin-top: 0;
  font-weight: 400;
  color: ${(p) => p.theme.secondaryColor};
`;
const Text = styled.div`
  color: ${(p) => p.theme.bodyFontColor};
  font-size: 1.7em;
  font-weight: 300;
  margin-bottom: ${(p) => (p.first ? "0px" : "0")};
  margin-top: ${(p) => (p.second ? "0px" : "0")};
`;

export const Splash = () => {
  const executeScroll = () =>
    myRef.current.scrollIntoView({ behavior: "smooth", block: "start" });

  const myRef = useRef(null);
  return (
    <div>
      <Wrapper>
        <Container>
          
          <Title><Fade cascade>Hi, my name is</Fade></Title>
          <NameBox>
            <Subtitle><Fade cascade>Stephen Lippa.</Fade></Subtitle>
          </NameBox>
          <Text first><Fade cascade delay={1500}>I am a front end developer.</Fade></Text>
          <Text second><Fade cascade delay={1500}>I build things for the web.</Fade></Text>
          <Fade delay={2500}>
          <Button onClick={executeScroll}>
            <NextButton text="VIEW" />
          </Button>
          </Fade>
        </Container>
      </Wrapper>
      <div ref={myRef}></div>
    </div>
  );
};
