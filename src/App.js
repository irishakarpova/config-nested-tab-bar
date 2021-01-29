import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from './components/barPanel/appBar/appBar'
import { AppBarStore } from './store/appBarStore';
import { GetParams } from './utility/useAppParams'

function App() {

  return (
    <AppBarStore.Provider value={GetParams()}>
      <CssBaseline />
      <AppBar />
    </AppBarStore.Provider>
  );
}

export default App;