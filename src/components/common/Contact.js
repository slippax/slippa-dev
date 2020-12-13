import styled, {keyframes} from 'styled-components';
import {useRef} from 'react';
import {MailButton} from './NextButton';
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
align-items:center;
background:${p=>p.theme.primaryColor};
`;

const Container = styled.div`
padding: 2em;
max-width: 400px;
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
margin-bottom:${p => p.first ? '0px':'30px'};
margin-top:${p => p.second ? '0px':'0'};
animation-name: ${FadeIn};
animation-fill-mode: forwards;
animation-duration: 3s;
`;

const Button = styled.div`
text-align:center;
margin-top: 30px;
`;

export const Contact = () => {
    let myRef= useRef();
    const executeScroll = () => myRef.current.scrollIntoView({behavior: "smooth", block: "start"});
    return(
        <div>
        <Wrapper>
        <Container>
            <Subtitle>Contact.</Subtitle>
            <Text> I'm currently looking for new opportunities, my inbox is always
                open. Whether you have a question or just want to say hi, I'll
                try my best to get back to you!</Text>
            <Button onClick={executeScroll}>
                <MailButton text="GET IN TOUCH"/>
            </Button>
        </Container>
        </Wrapper>
        <div ref={myRef}></div>
        </div>
    );
}