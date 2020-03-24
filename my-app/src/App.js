import React from 'react';
import logo from './twitter.svg';
import './App.css';
import theme from './themes/Theme'
import { ThemeProvider } from '@material-ui/core/styles';
import TopicInputField from './components/TopicInputField.js'
import Chart from './components/Chart'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Tweet Analyzer
          </p>
          <TopicInputField/>
        </header>
      </div>
      <div>
        <Chart />
      </div>
    </ThemeProvider>
  );
}

export default App;
