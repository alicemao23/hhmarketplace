import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';

const muiTheme = getMuiTheme({
    fontFamily: 'Avenir Next',    
    palette: {
      primary1Color: "#FFFFFF",   
      primary2Color: "#FBFAF8",  
      accent1Color: "#344B5B",      
      textColor: "#37393E",
      alternateTextColor: '#FFFFFF',
    },
    appBar: {
      color: "#FFFFFF",
      textColor: "#37393E",
    },
    tabs: {
        color: "#FFFFFF",
        textColor: "#37393E",
        selectedTextColor: "#37393E",
        
    }, 
    raisedButton: {
        color: "#344B5B", 
        textColor: "#FFFFFF"
    }
  });

ReactDOM.render(
    <Router>
        <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
            <App/>
        </MuiThemeProvider>
    </Router>
, document.getElementById('root'));
registerServiceWorker();
