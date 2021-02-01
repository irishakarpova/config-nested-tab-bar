import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from './components/barPanel/appBar/appBar';
import { AppBarStore } from './store/appBarStore';
import { GetParams } from './utility/useAppParams';

function App() {
  return /*#__PURE__*/React.createElement(AppBarStore.Provider, {
    value: GetParams()
  }, /*#__PURE__*/React.createElement(CssBaseline, null), /*#__PURE__*/React.createElement(AppBar, null));
}

export default App;