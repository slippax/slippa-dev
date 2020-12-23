import { useState } from "react";
import styled from "styled-components";
import Pulse from 'react-reveal/Pulse';
import {
  SiSass,
  SiJavascript,
  SiReact,
  SiPython,
  SiRedux,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiPostgresql,
  SiGithub,
  SiNpm,
  SiAmazonaws,
} from "react-icons/si";

const OuterBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items:center;
  justify-content:center;
  padding-left: 15px;
  @media (min-width: 700px) {
    padding-top: 40px;
    max-width: 500px;
  }
  @media (min-width: 1000px) {
    font-size: 1.1em;
    padding-top: 40px;
    font-size: 1.2em;
    max-width: 800px;
  }
`;

const Box = styled.div`
  font-weight: 300;
  padding: 0.9em;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  @media(min-width:700px) {
    padding: 1.5em;
    padding-bottom:0px;
    padding-top: 0px;
  }
`;

const IconBox = styled.div`
  color: ${(p) => p.theme.secondaryColor};
`;

const Menu = styled.div`
  border-right: 2px solid #99aab5;
  max-width: 115px;
  @media(min-width: 700px){
    border-right:none;
    border-bottom: 2px solid #99aab5;
    display:flex;
    max-width:600px;
    justify-content:center;
  }
  @media(min-width: 1000px){
    max-width:800px;
  }
`;

const Container = styled.div`
margin-top: 20px;
  display: flex;
  align-items: center;
  @media (min-width: 700px) {
   flex-direction:column;
   margin-top: 50px;
  }
`;

const MenuItem = styled.div`
  padding: 5px;
  border-radius: 1px;
  margin-bottom: ${p=> p.last? '0px' : '5px'};
  cursor: pointer;
  @media (min-width: 700px) {
   border-top-left-radius: 10px;
   border-top-right-radius: 10px;
    font-size: 1.1em;
    margin-bottom: 0px;
  }
  ${({ isSelected }) => isSelected && `background-color:#99aab580`};
`;

export const SkillsBox = () => {
  const [programming, setProgramming] = useState(false);
  const [front, setFront] = useState(true);
  const [database, setDatabase] = useState(false);
  const [storage, setStorage] = useState(false);

  const techPicker = (value) => {
    const refreshBoxes = () => {
      setProgramming(false);
      setFront(false);
      setDatabase(false);
      setStorage(false);
    };
    refreshBoxes();
    if (value === 'programming') {
      setProgramming(true);
    }
    if (value === 'front') {
      setFront(true);
    }
    if (value === 'database') {
      setDatabase(true);
    }
    if (value === 'storage') {
      setStorage(true);
    }
  };

  return (
    <Container>
      <Menu>
        <MenuItem
          onClick={() => techPicker('programming')}
          isSelected={programming}>
          Programming Languages
        </MenuItem>
        <MenuItem onClick={() => techPicker('front')} isSelected={front}>
          Front-end Technologies
        </MenuItem>
        <MenuItem onClick={() => techPicker('database')} isSelected={database}>
          Database Technologies
        </MenuItem>
        <MenuItem last onClick={() => techPicker('storage')} isSelected={storage}>
          Storage & Deployment
        </MenuItem>
      </Menu>
        <Pulse when={programming}>
        {programming ? (
          <OuterBox>
            <Box>
            <IconBox>
              <SiJavascript fontSize={25} />
            </IconBox>{" "}
            JavaScript
            </Box>
            <Box>
              <IconBox>
                <SiTypescript fontSize={25} />
              </IconBox>{" "}
              TypeScript
            </Box>
            <Box>
              <IconBox>
                <SiPython fontSize={25} />
              </IconBox>{" "}
              Python
            </Box>
          </OuterBox>
        ) : (
          <div />
        )}
        </Pulse>
        <Pulse when={front}>
        {front ? (
          <OuterBox>
            <Box>
              <IconBox>
                <SiReact fontSize={25} />
              </IconBox>{" "}
              React
            </Box>
            <Box>
              <IconBox>
                <SiRedux fontSize={25} />
              </IconBox>{" "}
              Redux
            </Box>
            <Box>
              <IconBox>
                <SiHtml5 fontSize={25} />
              </IconBox>{" "}
              HTML
            </Box>
            <Box>
              <IconBox>
                <SiCss3 fontSize={25} />
              </IconBox>{" "}
              CSS
            </Box>
            <Box>
              <IconBox>
                <SiSass fontSize={25} />
              </IconBox>{" "}
              SASS
            </Box>
          </OuterBox>
        ) : (
          <div />
        )}
        </Pulse>
        <Pulse when={database}>
        {database ? (
          <OuterBox>
            <Box>
              <IconBox>
                <SiMysql fontSize={25} />
              </IconBox>{" "}
              MySQL
            </Box>
            <Box>
              <IconBox>
                <SiPostgresql fontSize={25} />
              </IconBox>{" "}
              PostgreSQL
            </Box>
          </OuterBox>
        ) : (
          <div />
        )}
        </Pulse>
        <Pulse when={storage}>
        {storage ? (
          <OuterBox>
            <Box>
              <IconBox>
                <SiGithub fontSize={25} />
              </IconBox>{" "}
              Github
            </Box>
            <Box>
              <IconBox>
                <SiNpm fontSize={25} />
              </IconBox>{" "}
              NPM
            </Box>
            <Box>
              <IconBox>
                <SiAmazonaws fontSize={25} />
              </IconBox>{" "}
              AWS
            </Box>
          </OuterBox>
        ) : (
          <div />
        )}
        </Pulse>
    </Container>
  );
};
