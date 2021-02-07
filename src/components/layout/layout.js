import { useState, useRef } from "react";
import { Header, Backdrop, WavesEntry, WavesEnd } from "../common/";
import { Splash, About, Contact, Creations } from "./sections";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import LightTheme from "../themes/light";
import DarkTheme from "../themes/dark";
import styled from "styled-components";
import PageProgress from 'react-page-progress';
import Flip from 'react-reveal/Bounce';

const GlobalStyle = createGlobalStyle`
body {
  background: ${(p) => p.theme.bodyBackgroundColor};
  min-height: 100vh;
  margin: 0;
  color: ${(p) => p.theme.bodyFontColor};
}
`;

const BottomTag = styled.div `
display:flex;
justify-content:center;
margin-top: -30px;
margin-bottom: 20px;
font-size:1.1em;
font-weight: 500;
`;

const Particles = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
`;

const Layout = () => {
  let about = useRef();
  let creations = useRef();
  let contact = useRef();
  const executeAboutScroll = (value) => {
    console.log(value)
    about.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const executeCreationsScroll = () => {
    creations.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const executeContactScroll = () => {
    contact.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const [theme, setTheme] = useState(LightTheme);
  
  const themeSetter = (value) => {
    console.log(value);
    if (value) {
      setTheme(DarkTheme);
    } else {
      setTheme(LightTheme);
    }
  };

  return (
    <div>
      <PageProgress color={'#7289da'} height={3}/>
      <Particles>
        <Backdrop />
      </Particles>
      <ThemeProvider
        theme={{
          ...theme,
          setTheme: () => {
            setTheme((s) => (s.id === "light" ? DarkTheme : LightTheme));
          },
        }}
      >
        <GlobalStyle />
        <Header
          aboutclick={executeAboutScroll}
          creationsclick={executeCreationsScroll}
          contactclick={executeContactScroll}
          switch={themeSetter}
        />
        <Splash />
        <div ref={about} />
        <WavesEntry/>
        <About />
        <WavesEnd/>
        <div ref={creations} />
        <Creations />
        <div ref={contact} />
        <WavesEntry/>
        <Contact />
        <WavesEnd/>
        <BottomTag><Flip cascade delay="400">Built by Stephen Lippa | 2021</Flip></BottomTag>
      </ThemeProvider>
    </div>
  );
};

export default Layout;
