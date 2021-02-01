import React from 'react';
const defaultValue = {
  menuItems: [],
  value: null,
  hoverId: null,
  subvalue: null,
  activeValue: "1",
  changed: false,
  parentId: null,
  state: {
    top: false
  },
  subvalueChanged: false,
  handleChangeSubValue: (event, newValue) => {},
  handleValueChange: () => {},
  toggleDrawer: (anchor, open, menuId, parentId) => event => {},
  handleChangeSubValueUpd: () => {}
};
export const AppBarStore = /*#__PURE__*/React.createContext(defaultValue);