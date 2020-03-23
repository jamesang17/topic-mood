import React from 'react';
import logo from './twitter.svg';
import './App.css';
import InputField from './components/InputField.js'
import theme from './themes/Theme'
import { ThemeProvider } from '@material-ui/core/styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Tweet Analyzer
          </p>
          <InputField/>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
