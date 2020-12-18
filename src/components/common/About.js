import styled from 'styled-components';
import { useRef } from 'react';
import { SiSass, SiJavascript, SiReact, SiNodemon, SiPython, SiRedux } from 'react-icons/si'
import Fade from 'react-reveal/Fade';

const Wrapper = styled.div`
background:${p => p.theme.primaryColor};
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`;

const Container = styled.div`
padding: 2em;
max-width: 400px;
display:flex;
flex-direction:column;
@media(min-width:700px){
  max-width: 700px;
  font-size:1.2em;
}
@media(min-width:1000px){
  max-width: 1000px;
  font-size:1.2em;
}
`;

const Subtitle = styled.p`
font-size: 2.5em;
margin-top: 0;
font-weight: 600;
color: ${p => p.theme.secondaryColor};
margin-bottom: 20px;
`;
const Text = styled.p`
opacity:1;
color: ${p => p.theme.bodyFontColor};
font-size: 1.35em;
font-weight: 400;
margin-bottom:${p => p.first ? '20px' : '20px'};
margin-top:${p => p.second ? '0px' : '0'};
`;

const OuterBox = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:center;
align-items:center;
@media(min-width:700px){
 max-width:500px;
}
`;

const Box = styled.div`
font-weight: 300;
font-size: 1.3em;
width:50%;
padding-bottom: 25px;
`;

const TechBox = styled.div`
padding-left: 30px;
padding-top: 20px;
width: 100%;
display:flex;
justify-content:center;
align-items:center;
@media(min-width:700px){
  padding-top: 40px;
  font-size:1.1em;
}
@media(min-width:1000px){
  padding-top: 30px;
  font-size:1.2em;
}
`;

const IconBox = styled.div`
color:${p => p.theme.secondaryColor};
display:inline-flex;
padding-right: 5px;
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
            <Text first>
              After graduating York University, I found a passion for using
              web technologies.
              Here are a few technologies and languages I've been working with recently:
              </Text>
          <TechBox>
              <OuterBox>
                <Box><IconBox><SiJavascript fontSize={25} /></IconBox> JavaScript</Box>
                <Box><IconBox><SiReact fontSize={25} /></IconBox> React</Box>
                <Box><IconBox><SiRedux fontSize={25} /></IconBox> Redux</Box>
                <Box><IconBox><SiSass fontSize={25} /></IconBox> (S)CSS</Box>
                <Box><IconBox><SiNodemon fontSize={25} /></IconBox> Node.js</Box>
                <Box><IconBox><SiPython fontSize={25} /></IconBox> Python</Box>
              </OuterBox>
          </TechBox>
          </Fade>
        </Container>
      </Wrapper>
      <div ref={myRef}></div>
    </div>
  );
}