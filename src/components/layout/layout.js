import { useState, useRef } from 'react';
import { Splash, About, Creations, Contact, Header, Backdrop} from '../common/';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import LightTheme from '../themes/light'
import DarkTheme from '../themes/dark';
import styled from 'styled-components';
const GlobalStyle = createGlobalStyle`
body {
  background: ${p => p.theme.bodyBackgroundColor};
  min-height: 100vh;
  margin: 0;
  color: ${p => p.theme.bodyFontColor};
}
`;

const Particles = styled.div`
 width: 100%;
    height: 100%;
    position: fixed;
    z-index: -10;
    top: 0;
    left: 0;
`;

const Layout = () => {
  let about = useRef();
  let creations = useRef();
  let contact = useRef();
  const executeAboutScroll = () => {
    about.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  const executeCreationsScroll = () => {
    creations.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  const executeContactScroll = () => {
    contact.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  const [theme, setTheme] = useState(LightTheme);
  const themeSetter = (value) => {
    console.log(value);
    if (value) {
      setTheme(DarkTheme);
    } else {
      setTheme(LightTheme);
    }
  }


  return (
    <div>
          <Particles>
    <Backdrop/>
    </Particles>
    <ThemeProvider theme={{
      ...theme, setTheme: () => {
        setTheme(s => s.id === 'light' ? DarkTheme : LightTheme)
      }
    }}>
      <GlobalStyle />
      <Header aboutclick={executeAboutScroll} creationsclick={executeCreationsScroll} contactclick={executeContactScroll} switch={themeSetter} />
      <Splash />
      <div ref={about} />
      <About />
      <div ref={creations} />
      <Creations />
      <div ref={contact} />
      <Contact />
    </ThemeProvider>
    </div>
  )
}

export default Layout
