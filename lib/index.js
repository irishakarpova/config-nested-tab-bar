import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import App from './App';
import { BrowserRouter as Router, Route } from "react-router-dom";
ReactDOM.render( /*#__PURE__*/React.createElement(ThemeProvider, {
  theme: theme
}, /*#__PURE__*/React.createElement(Router, null, /*#__PURE__*/React.createElement(Route, {
  path: "/",
  render: () => {
    return /*#__PURE__*/React.createElement(App, null);
  }
}))), document.getElementById('root'));