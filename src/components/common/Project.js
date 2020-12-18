import styled from 'styled-components';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import GifPlayer from 'react-gif-player';

const ProjectContainer = styled.div`
display:flex;
align-items:center;
margin-top: 25px;
@media(min-width:1000px){
margin-top: 100px;
margin-bottom: 75px;
}
`;
const ProjectBox = styled.div`
border-radius: 6px;
padding-top: 5px;
padding-bottom: 5px;
border-color: ${p => p.theme.bodyFontColor} !important;
border-left: ${p => p.alt ? 'none' : '2px solid'};
border-right: ${p => p.alt ? '2px solid' : 'none'};
padding-left: ${p => p.alt ? '0px' : '20px'};
padding-right: ${p => p.alt ? '20px' : '0px'};
`;

const ProjectHead = styled.div`
text-align: ${p => p.alt ? 'right' : 'left'};
`;

const ProjectBody = styled.div`
padding: 12px;
padding-top: 1px;
padding-bottom: 1px;
border-radius: 6px;
background:${p => p.theme.textBodyBackground} !important;
text-align:${p => p.alt ? 'right' : 'left'};
max-width:400px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
                  0px 1px 1px 0 rgba(0, 0, 0, 0.12),
                  0px 3px 4px -1px rgba(0, 0, 0, 0.4);
&:hover {
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
                  0 1px 18px 0 rgba(0, 0, 0, 0.12),
                  0px 3px 10px -1px rgba(0, 0, 0, 0.4)
}
@media(min-width:700px){
  max-width: 700px;
}
@media(min-width: 1000px){
  max-width: 1000px;
}
`;

const ProjectFooter = styled.div`
`;

const ProjectTitle = styled.p`
font-weight:800;
font-size:1.8em;
margin-bottom:10px;
margin-top: 0px;
`;

const ProjectText = styled.p`
color:${p => p.theme.textBodyFontColor};
`;

const ProjectTechBox = styled.div`
display:flex;
justify-content:${p => p.alt ? 'flex-end' : 'flex-start'} !important;
`;

const ProjectIconBox = styled.div`
padding-right: 10px;
cursor: pointer;
`;

const ProjectTechText = styled.p`
padding-right: 15px;
font-weight:700;
`;

const ProjectIcons = styled.div`
display:flex;
justify-content:${p => p.alt ? 'flex-end' : 'flex-start'} !important;
color:${p => p.theme.secondaryColor};
`
const GifBox = styled.div`
height:221px;
margin-left: ${p=> p.alt? '30px' : '0px'};
margin-right: ${p=> p.alt? '0px' : '30px'};
display:none;
cursor:pointer;
align-items:center;
@media(min-width: 1000px){
  display:flex;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
                  0px 1px 1px 0 rgba(0, 0, 0, 0.12),
                  0px 3px 4px -1px rgba(0, 0, 0, 0.4);
&:hover {
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
                  0 1px 18px 0 rgba(0, 0, 0, 0.12),
                  0px 3px 10px -1px rgba(0, 0, 0, 0.4)
}
}
`;

export const Project = (props) => {
  return (
    <ProjectContainer>
         <GifBox>
      <GifPlayer gif={props.gif} still={props.image} />
      </GifBox>
      <ProjectBox>
        <ProjectHead><ProjectTitle>
          {props.title}
        </ProjectTitle></ProjectHead>
        <ProjectBody><ProjectText>
          {props.text}
        </ProjectText></ProjectBody>
        <ProjectFooter>
          <ProjectTechBox>
            <ProjectTechText>
              {props.tech}
            </ProjectTechText>
            <ProjectTechText>
              {props.tech2}
            </ProjectTechText>
          </ProjectTechBox>
          <ProjectIcons>
            <ProjectIconBox><FaGithub onClick={props.gitclick} fontSize={24} /> </ProjectIconBox><ProjectIconBox> <FaExternalLinkAlt fontSize={22} onClick={props.linkclick} /></ProjectIconBox>
          </ProjectIcons>
        </ProjectFooter>
      </ProjectBox>
   
    </ProjectContainer>
  );
}

export const ProjectAlt = (props) => {
  return (
    <ProjectContainer>
         
      <ProjectBox alt>
        <ProjectHead alt><ProjectTitle>
          {props.title}
        </ProjectTitle></ProjectHead>
        <ProjectBody alt><ProjectText>
          {props.text}
        </ProjectText></ProjectBody>
        <ProjectFooter>
          <ProjectTechBox alt>
            <ProjectTechText>
              {props.tech}
            </ProjectTechText>
            <ProjectTechText>
              {props.tech2}
            </ProjectTechText>
          </ProjectTechBox>
          <ProjectIcons alt>
            <ProjectIconBox><FaGithub fontSize={24} onClick={props.gitclick} /> </ProjectIconBox><ProjectIconBox> <FaExternalLinkAlt fontSize={22} onClick={props.linkclick} /></ProjectIconBox>
          </ProjectIcons>
        </ProjectFooter>
      </ProjectBox>
      <GifBox alt>
      <GifPlayer gif={props.gif} still={props.image} />
      </GifBox>
    </ProjectContainer>
  );
}