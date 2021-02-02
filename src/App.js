import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from './components/barPanel/appBar/appBar'
import { AppBarStore } from './store/appBarStore';
import { GetParams } from './utility/useAppParams'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme'

function App() {

  return (
    <ThemeProvider  theme={theme}>
      <AppBarStore.Provider value={GetParams()}>
        <CssBaseline />
        <AppBar />
      </AppBarStore.Provider>
    </ThemeProvider>
  );
}

export default App;