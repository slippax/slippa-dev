import styled from 'styled-components';
import {Switch} from './Switch';
import Headroom from 'react-headroom';
import Fade from 'react-reveal/Fade';

const Wrapper = styled.div`
background:${p=>p.theme.headerColor} !important;
width:100%;
z-index:1;
backdrop-filter: saturate(180%) blur(20px); 
&:hover {
  background:${p=>p.theme.bodyBackgroundColor} !important;
}
`;

const LogoBox = styled.div`
width: 12%;
display:flex;
justify-content:flex-start;
align-items:center;
@media(min-width:600px) {
    justify-content:flex-start;
    width:80%;
}
@media(min-width:900px) {
    justify-content:center;
    width:30%;
}
`;

const Logo = styled.p`
font-size: 1.5em;
font-weight: 600;
color: ${p=>p.theme.secondaryColor};
margin-top: 12px;
margin-bottom: 12px;
padding-left : 12px;
`;

const LinkBox = styled.div`
display: flex;
justify-content:flex-end;
width: 88%;
max-width:1200px;
@media(min-width:400px) {
    justify-content:flex-end;
}
@media(min-width:700px) {
    justify-content:space-evenly;
    width:90%;
}
@media(min-width:900px) {
    justify-content:flex-end;
    width:60%;
}
`;


const Link = styled.p`
font-weight: 600;
color:${p=>p.theme.bodyFontColor};
margin-right: ${p=>p.last ? '5px' : '15px'};
margin-top: 15px;
cursor:pointer;
`;

const Container = styled.div`
display:flex;
align-items:center;
`;

const Button = styled.div`
display:flex;
padding-left: 15px;
outline:none;
`;

export const Header = (props) => {
    
   return(
     <Headroom>
       <Fade top delay={3500}>
     <Wrapper>
           <Container>
           <LogoBox>
    <Logo>
       SL
        </Logo> 
        <Button>
        <Switch clicked={props.switch}/>
          </Button>
        </LogoBox>
          <LinkBox>
          <Link onClick={props.aboutclick}>
          About.
          </Link>
          <Link onClick={props.creationsclick}>
          Works.
          </Link>
          <Link last onClick={props.contactclick}>
          Contact.
          </Link>
          </LinkBox>
          </Container>
       </Wrapper>
       </Fade>
       </Headroom>
   ); 
}



