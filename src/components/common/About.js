import styled, {keyframes} from 'styled-components';
import {useRef} from 'react';
import {SiSass, SiJavascript, SiReact, SiNodemon, SiPython, SiRedux} from 'react-icons/si'
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
background:${p=>p.theme.primaryColor};
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
`;

const Subtitle = styled.p`
opacity:0;
font-size: 2.5em;
margin-top: 0;
font-weight: 600;
color: ${p=>p.theme.secondaryColor};
animation-name:${FadeIn};
animation-duration: 2s;
animation-fill-mode:forwards;
margin-bottom: 20px;
`;
const Text = styled.p`
opacity:0;
color: ${p=>p.theme.bodyFontColor};
font-size: 1.35em;
font-weight: 400;
margin-bottom:${p => p.first ? '20px':'20px'};
margin-top:${p => p.second ? '0px':'0'};
animation-name: ${FadeIn};
animation-fill-mode: forwards;
animation-duration: 3s;
`;

const Button = styled.div`
text-align:center;
margin-top: 30px;
`;

const OuterBox = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:center;
max-width: 700px;
width: 100%;
`;

const Box = styled.div`
font-weight: 00;
font-size: 1.3em;
width:50%;
padding-bottom: 25px;
`;

const TechBox = styled.div`
padding-top: 10px;
padding-left:30px;
width: 100%;
`;

export const About = () => {
    let myRef= useRef();
    const executeScroll = () => myRef.current.scrollIntoView({behavior: "smooth", block: "start"});
    return(
        <div>
        <Wrapper>
        <Container>
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
            <Button onClick={executeScroll}>
            </Button>
            <TechBox>
            <OuterBox>
                <Box><SiJavascript fontSize={25}/> JavaScript</Box>
                <Box><SiReact fontSize={25}/> React</Box>
                <Box><SiRedux fontSize={25}/> Redux</Box>
                <Box><SiSass fontSize={25}/> (S)CSS</Box>
                <Box><SiNodemon fontSize={25}/> Node.js</Box>
                <Box><SiPython fontSize={25}/> Python</Box>
                </OuterBox>
                </TechBox>
        </Container>
        </Wrapper>
        <div ref={myRef}></div>
        </div>
    );
}