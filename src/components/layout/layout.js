import { useState} from "react";
import { Header, Backdrop, WavesEntry, WavesEnd } from "../common/";
import { Splash, About, Contact, Creations } from "./sections";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Element, scroller } from 'react-scroll'
import LightTheme from "../themes/light";
import DarkTheme from "../themes/dark";
import styled from "styled-components";
import PageProgress from 'react-page-progress';
import Flip from 'react-reveal/Zoom';

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
  const executeAboutScroll = () => {
    scroller.scrollTo('about', {
      duration: 1000,
      delay: 50,
      smooth: true,
      offset: -35, // Scrolls to element + 50 pixels down the page
    })
  };
  const executeCreationsScroll = () => {
    scroller.scrollTo('creations', {
      duration: 1000,
      delay: 50,
      smooth: true,
      offset: -35, // Scrolls to element + 50 pixels down the page
    })
  };
  const executeContactScroll = () => {
    scroller.scrollTo('contact', {
      duration: 1000,
      delay: 50,
      smooth: true,
      offset: -35, // Scrolls to element + 50 pixels down the page
    })
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
        <Splash continueclick={executeAboutScroll} />
        
        <div />
        <WavesEntry/>
        <Element name="about">
        <About/>
        </Element>
        <WavesEnd/>
        <Element name="creations">
        <Creations />
        </Element>
        <WavesEntry/>
        <Element name="contact">
        <Contact />
        </Element>
        <WavesEnd/>
        <BottomTag id="aboutcontainer"><Flip cascade delay={200}>Built by Stephen Lippa | 2021</Flip></BottomTag>
      </ThemeProvider>
    </div>
  );
};

export default Layout;
