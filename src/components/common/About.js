import styled from 'styled-components';
import {useRef} from 'react';
import {SiSass, SiJavascript, SiReact, SiNodemon, SiPython, SiRedux} from 'react-icons/si'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

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
@media(min-width:700px){
  max-width: 700px;
  font-size:1.2em;
}
`;

const Subtitle = styled.p`
opacity:1;
font-size: 2.5em;
margin-top: 0;
font-weight: 00;
color: ${p=>p.theme.secondaryColor};
margin-bottom: 20px;
`;
const Text = styled.p`
opacity:1;
color: ${p=>p.theme.bodyFontColor};
font-size: 1.35em;
font-weight: 400;
margin-bottom:${p => p.first ? '20px':'20px'};
margin-top:${p => p.second ? '0px':'0'};
`;

const Button = styled.div`
text-align:center;
margin-top: 30px;
`;

const OuterBox = styled.div`
display:flex;
flex-wrap:wrap;
max-width: 400px;
@media(min-width:700px){
  max-width: 700px;
  padding-left: 100px;
}
`;

const Box = styled.div`
font-weight: 300;
font-size: 1.3em;
width:50%;
padding-bottom: 25px;
`;

const TechBox = styled.div`
padding-top: 10px;
padding-left:30px;
width: 100%;
`;

const IconBox = styled.div`
color:${p=>p.theme.secondaryColor};
display:inline-flex;
padding-right: 5px;
`;

export const About = () => {
    let myRef= useRef();
    const executeScroll = () => myRef.current.scrollIntoView({behavior: "smooth", block: "start"});
    return(
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
            <Button onClick={executeScroll}>
            </Button>
            </Fade>
            <TechBox>
            <Zoom>
            <OuterBox>   
                <Box><IconBox><SiJavascript fontSize={25}/></IconBox> JavaScript</Box>
                <Box><IconBox><SiReact fontSize={25}/></IconBox> React</Box>
                <Box><IconBox><SiRedux fontSize={25}/></IconBox> Redux</Box>
                <Box><IconBox><SiSass fontSize={25}/></IconBox> (S)CSS</Box>
                <Box><IconBox><SiNodemon fontSize={25}/></IconBox> Node.js</Box>
                <Box><IconBox><SiPython fontSize={25}/></IconBox> Python</Box>       
                </OuterBox>
                </Zoom>
                </TechBox>        
        </Container>
        </Wrapper>
        <div ref={myRef}></div>
        </div>
    );
}