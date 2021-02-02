import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from './components/barPanel/appBar/appBar';
import { AppBarStore } from './store/appBarStore';
import { GetParams } from './utility/useAppParams';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

function App() {
  return /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React.createElement(AppBarStore.Provider, {
    value: GetParams()
  }, /*#__PURE__*/React.createElement(CssBaseline, null), /*#__PURE__*/React.createElement(AppBar, null)));
}

export default App;