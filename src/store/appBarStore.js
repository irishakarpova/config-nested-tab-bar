import React from 'react'

export const AppBarStore = React.createContext({
    value: null,
    hoverId: null,
    subvalue: null,
    activeValue: "1",
    changed: false,
    parentId: null,
    state: {top: false},
    subvalueChanged: null,
    handleChangeSubValue: () => {},
    handleValueChange: () => {},
    toggleDrawer: () => {},
    handleChangeSubValueUpd: () => {}
});

