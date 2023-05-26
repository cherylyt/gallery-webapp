import logo from './logo.svg';
import './App.css';
import Gallery from './Gallery';
import { Container, IconButton } from '@mui/material';
import { createTheme } from '@mui/system';
import { ThemeProvider } from '@mui/private-theming';
import GitHubIcon from '@mui/icons-material/GitHub';

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
              <span style={{color: '#D97D54'}}>Gallery </span>  <span style={{color: '#BDBDBD'}}>- digital and film pieces.</span>
              <span style={{float: 'right'}}>
                <IconButton sx={{color: "#D97D54"}} onClick={() => window.open('https://github.com/cherylyt')}>
                  <GitHubIcon />
                </IconButton>
              </span>
            </p>
          </Container>
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
          <Gallery/>   
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
