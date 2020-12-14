import styled, {keyframes} from 'styled-components';
import {NextButton} from './NextButton';
import {useRef} from 'react';
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



const Button = styled.div`
text-align:center;
margin-top: 30px;
`;
const Wrapper = styled.div`
display: flex;
align-items:center;
height:100vh;
justify-content: center;

`;

const Container = styled.div`
position:absolute;
top: 15%;
@media(min-width:450px){
  font-size:1.2em;
}
@media(min-width: 700px) {
font-size:1.4em;
}
`;

const Title = styled.p`
opacity:0;
font-size: 2em;
margin-bottom: 0;
font-weight: 300;
animation-name: ${FadeIn};
animation-duration: 3s;
animation-fill-mode:forwards;
animation-delay: 0.5s;
`;

const NameBox=styled.div`
display:flex;
`;

const Subtitle = styled.p`
opacity:0;
font-size: 2.5em;
margin-top: 0;
font-weight: 400;
color: ${p=>p.theme.secondaryColor};
animation-name: ${FadeIn};
animation-duration: 2s;
animation-fill-mode:forwards;
animation-delay: 1.5s;
`;
const Text = styled.p`
opacity:0;
color: ${p=>p.theme.bodyFontColor};
font-size: 1.7em;
font-weight: 300;
margin-bottom:${p => p.first ? '0px':'0'};
margin-top:${p => p.second ? '0px':'0'};
animation-name: ${FadeIn};
animation-fill-mode: forwards;
animation-duration: 3s;
animation-delay: ${p=>p.first ? '3s' : '4s'};
`;

export const Splash = () => {

  const executeScroll = () => myRef.current.scrollIntoView({behavior: "smooth", block: "start"});

  const myRef = useRef(null)
    return (
      <div>
        <Wrapper>
        <Container>
            <Title>Hi, my name is</Title>
            <NameBox>
            <Subtitle>Stephen Lippa.</Subtitle>
            </NameBox>
            <Text first>I am a front end developer.</Text>
            <Text second>I build things for the web.</Text>
            <Button onClick={executeScroll}>
            <NextButton text="VIEW"/>
            </Button>
        </Container>
        </Wrapper>
        <div ref={myRef}></div>
        </div>
    );
}