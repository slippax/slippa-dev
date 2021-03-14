import { useState } from "react";
import styled from "styled-components";
import Pulse from "react-reveal/Pulse";
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
  SiVueDotJs,
  SiTailwindcss,
  SiBootstrap,
  SiMariadb
} from "react-icons/si";

const OuterBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  @media (min-width: 700px) {
    flex-wrap: nowrap;
    padding-top: 40px;
    max-width: 700px;
    font-size: 1.1em;
    width: auto;
  }
  @media (min-width: 1000px) {
    padding-top: 40px;
    font-size: 1.2em;
    max-width: 1000px;
  }
`;

const Box = styled.div`
  font-weight: 300;
padding: 1em;
padding-bottom: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 700px) {
    padding: 1.5em;
    padding-bottom: 0px;
    padding-top: 0px;
  }
`;

const IconBox = styled.div`
  color: ${(p) => p.theme.secondaryColor};
`;

const Menu = styled.div`
  border-right: 2px solid #99aab5;
  @media (min-width: 700px) {
    width: auto;
    border-right: none;
    border-bottom: 2px solid #99aab5;
    display: flex;
    max-width: 600px;
    justify-content: center;
  }
  @media (min-width: 1000px) {
    max-width: 800px;
  }
`;

const Container = styled.div`
  margin-top: 20px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 700px;
  @media (min-width: 1000px) {
    margin-top: 50px;
    max-width:1000px;
  }
`;

const TechBox = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;
  margin-left: 20px;
  @media(min-width:700px) {
    margin-left: 0px;
  }
`;

const MenuItem = styled.div`
  width: 100px;
  padding: 5px;
  border-radius: 1px;
  margin-bottom: ${(p) => (p.last ? "0px" : "5px")};
  margin-right: -2px;
  cursor: pointer;
  ${({ isSelected }) => isSelected && `border-right: 2px solid #7289da `};
  ${({ isSelected }) => isSelected && `background-color:#99aab580`};
  @media (min-width: 700px) {
    ${({ isSelected }) => isSelected && `border-bottom: 2px solid #7289da `};
    border-right:none;
    margin-right: 0px;
    width: auto;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    margin-bottom: -2px;
  }
  
`;

const Wrapper = styled.div`
  display: flex;

  @media (min-width: 700px) {
    display: flex;
    flex-direction: column;
  }
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
    if (value === "programming") {
      setProgramming(true);
    }
    if (value === "front") {
      setFront(true);
    }
    if (value === "database") {
      setDatabase(true);
    }
    if (value === "storage") {
      setStorage(true);
    }
  };

  return (
    <Wrapper>
      <Container>
        <Menu>
          <MenuItem
            onClick={() => techPicker("programming")}
            isSelected={programming}
          >
            Programming Languages
          </MenuItem>
          <MenuItem onClick={() => techPicker("front")} isSelected={front}>
            Front-end Technologies
          </MenuItem>
          <MenuItem
            onClick={() => techPicker("database")}
            isSelected={database}
          >
            Database Technologies
          </MenuItem>
          <MenuItem
            last
            onClick={() => techPicker("storage")}
            isSelected={storage}
          >
            Storage & Deployment
          </MenuItem>
        </Menu>
      </Container>
      <TechBox>
        <Pulse when={programming}>
          {programming ? (
            <OuterBox>
              <Box>
                <IconBox>
                  <SiJavascript fontSize={25} />
                </IconBox>
                JavaScript
              </Box>
              <Box>
                <IconBox>
                  <SiTypescript fontSize={25} />
                </IconBox>
                TypeScript
              </Box>
              <Box>
                <IconBox>
                  <SiPython fontSize={25} />
                </IconBox>
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
                </IconBox>
                React
              </Box>
              <Box>
                <IconBox>
                  <SiRedux fontSize={25} />
                </IconBox>
                Redux
              </Box>
              <Box>
                <IconBox>
                  <SiVueDotJs fontSize={25} />
                </IconBox>
                Vue
              </Box>
              <Box>
                <IconBox>
                  <SiTailwindcss fontSize={25} />
                </IconBox>
                Tailwind
              </Box>
              <Box>
                <IconBox>
                  <SiSass fontSize={25} />
                </IconBox>
                SASS
              </Box>
              <Box>
                <IconBox>
                  <SiBootstrap fontSize={25} />
                </IconBox>
                Bootstrap
              </Box>
            </OuterBox>
          ) : (
            <div />
          )}
        </Pulse>
        <Pulse when={database}>
          {database ? (
            <OuterBox>
              <Box less>
                <IconBox>
                  <SiMysql fontSize={25} />
                </IconBox>
                MySQL
              </Box>
              <Box less>
                <IconBox>
                  <SiPostgresql fontSize={25} />
                </IconBox>
                PostgreSQL
              </Box>
              <Box less>
                <IconBox>
                  <SiMariadb fontSize={25} />
                </IconBox>
                MariaDB
              </Box>
            </OuterBox>
          ) : (
            <div />
          )}
        </Pulse>
        <Pulse when={storage}>
          {storage ? (
            <OuterBox>
              <Box less>
                <IconBox>
                  <SiGithub fontSize={25} />
                </IconBox>
                Github
              </Box>
              <Box less>
                <IconBox>
                  <SiNpm fontSize={25} />
                </IconBox>
                NPM
              </Box>
              <Box less>
                <IconBox>
                  <SiAmazonaws fontSize={25} />
                </IconBox>
                AWS
              </Box>
            </OuterBox>
          ) : (
            <div />
          )}
        </Pulse>
      </TechBox>
    </Wrapper>
  );
};
