import * as React from 'react';
import './App.css';
import Gallery from './Gallery';
import { Container, IconButton } from '@mui/material';
import { createTheme } from '@mui/system';
import { ThemeProvider } from '@mui/private-theming';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Tooltip from '@mui/material/Tooltip';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Lora',
      'serif'
    ].join(','),
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <Container maxWidth="lg">
            <p >
              <span style={{ color: '#D97D54' }}>Gallery </span>  <span style={{ color: '#BDBDBD' }}>- digital and film pieces.</span>
              <span style={{ float: 'right' }}>
                <IconButton sx={{ color: "#D97D54" }} onClick={() => window.open('https://www.linkedin.com/in/yan-tung-cheryl-chu/')}>
                  <LinkedInIcon />
                </IconButton>
                <IconButton sx={{ color: "#D97D54" }} onClick={() => window.open('https://github.com/cherylyt')}>
                  <GitHubIcon />
                </IconButton>
                <span style={{ color: '#D97D54', fontSize: 15 }}>Cheryl Chu</span>
              </span>
            </p>
          </Container>
          <Gallery />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
