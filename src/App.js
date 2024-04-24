import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { themeDark, themeLight } from './config/theme';
import { Toaster } from 'react-hot-toast';
import Routes from './config/routes'; 
import styled from 'styled-components';


const StyledWrapper = styled.div`
  background-color: ${props => props.theme.backgroundColor}
`;

function App() {
  const [theme, setTheme] = useState(themeLight);


  return (
    <ThemeProvider theme={theme}>

      <StyledWrapper >
        <button
            onClick={() => {
              if (theme === themeLight) {
                setTheme(themeDark)
              } else {
                setTheme(themeLight)
               }
        }} >Switch Theme</button>
          <Toaster />
          <Routes />
      </StyledWrapper>
   
    </ThemeProvider>
  );
}

export default App;
