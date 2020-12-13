import {useState} from 'react';
import {Splash, About, Creations, Contact} from '../common/';
import {createGlobalStyle, ThemeProvider} from 'styled-components';
import LightTheme from '../themes/light'
import DarkTheme from '../themes/dark';
const GlobalStyle = createGlobalStyle`
body {
  background: ${p => p.theme.bodyBackgroundColor};
  min-height: 100vh;
  margin: 0;
  color: ${p => p.theme.bodyFontColor};
}
`;

const Layout = () => {
    const [theme, setTheme] = useState(LightTheme);
    return (
        <ThemeProvider theme={{...theme, setTheme: ()=> {
            setTheme(s => s.id === 'light' ? DarkTheme : LightTheme)
          }}}>
              <GlobalStyle/>
            <Splash/>
            <About/>
            <Creations/>
            <Contact/>
            </ThemeProvider>
    )
}

export default Layout
