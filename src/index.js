import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme'
import App from './App';
import { BrowserRouter as Router, Route} from "react-router-dom"


ReactDOM.render(
    <ThemeProvider  theme={theme}>
      <Router>
        <Route path="/" render={()=>{return <App/>}}/>
      </Router>
    </ThemeProvider>,
  document.getElementById('root')
);
