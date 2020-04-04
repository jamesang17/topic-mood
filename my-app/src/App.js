import React from 'react';
import './App.css';
import ModuleContainer from './components/ModuleContainer'
import theme from './themes/Theme'
import { ThemeProvider } from '@material-ui/core/styles';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <ModuleContainer />
            </div>
        </ThemeProvider>
  );
}

export default App;
