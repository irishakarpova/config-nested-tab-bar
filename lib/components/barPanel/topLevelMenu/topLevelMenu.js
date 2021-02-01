import React from 'react';
import Button from '@material-ui/core/Button';
import { AppBarStore } from '../../../store/appBarStore';
import { useStyles } from './styles';

const MainMenu = ({
  menuItems
}) => {
  const classes = useStyles();
  return /*#__PURE__*/React.createElement(AppBarStore.Consumer, null, ({
    value,
    toggleDrawer,
    activeValue
  }) => /*#__PURE__*/React.createElement("div", {
    className: classes.root
  }, menuItems && menuItems.map(menuItem => {
    return menuItem != null && menuItem.parentId === "0" && /*#__PURE__*/React.createElement(Button, {
      className: activeValue === menuItem.id ? classes.rootBtnActive : value === menuItem.id ? classes.rootBtnHover : classes.rootBtn,
      value: menuItem.id,
      key: menuItem.label,
      onMouseOver: toggleDrawer('top', true, menuItem.id, menuItem.label)
    }, menuItem.label);
  })));
};

export default MainMenu;