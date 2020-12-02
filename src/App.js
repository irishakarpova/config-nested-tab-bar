import React from 'react';
import AppBar from './components/barPanel/appBar/appBar'
import { AppBarStore } from './store/appBarStore';
import { GetParams } from './utility/useAppParams'

function App() {
  return (
    <AppBarStore.Provider value={GetParams()}>
      <AppBar />
    </AppBarStore.Provider>
  );
}

export default App;