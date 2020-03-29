import React from 'react';
import './App.css';
import Navigation from './components/Navigation'
import theme from './themes/Theme'
import { ThemeProvider } from '@material-ui/core/styles';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Navigation />
            </div>
        </ThemeProvider>
  );
}

export default App;
