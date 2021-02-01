import React from 'react';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { Link as RouterLink } from 'react-router-dom';
import parse from 'html-react-parser';
import useWindowDimensions from '../../../utility/getWindowSize';
import useScrollPosition from '../../../utility/getScrollPosition';
import GetTime from '../../../utility/getTime';
import { AppBarStore } from '../../../store/appBarStore';
import { useStyles } from './styles';

const AppTabs = ({
  menuItems
}) => {
  const store = React.useContext(AppBarStore);
  const classes = useStyles();
  const {
    width
  } = useWindowDimensions();
  const position = useScrollPosition();
  return /*#__PURE__*/React.createElement(SwipeableDrawer, {
    style: {
      zIndex: 1
    },
    BackdropProps: {
      invisible: true
    },
    anchor: 'top',
    open: store.state['top'],
    onClose: store.toggleDrawer('top', true),
    onOpen: store.toggleDrawer('top', true),
    onMouseOut: GetTime(store)
  }, /*#__PURE__*/React.createElement("div", {
    role: "menu",
    style: width > 596 ? {
      marginTop: 76 - position
    } : {
      marginTop: 96 - position
    },
    onClick: store.toggleDrawer('top', false)
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: store.subvalue !== '/' && (store.subvalueChanged || !store.subvalueChanged && !store.changed || store.activeValue === store.value) ? store.subvalue : false,
    onChange: store.handleChangeSubValue,
    textColor: "primary",
    variant: "scrollable",
    "aria-label": "affiliates tabs"
  }, menuItems && menuItems.map(menuItem => {
    let url;
    return menuItem && store.hoverId === menuItem.parentId && (url = store.parentId && `/${store.parentId.replace(' ', '-').toLowerCase()}/${menuItem.label.replace(/\s+/g, '-').toLowerCase()}`) ? /*#__PURE__*/React.createElement(Tab, {
      component: RouterLink,
      key: menuItem.id,
      value: url,
      to: url,
      label: parse(menuItem.label.length > 11 ? menuItem.label.replace(' ', '<br/>') : menuItem.label),
      color: "primary",
      wrapped: true,
      disableRipple: true,
      className: classes.tabs,
      classes: {
        root: classes.tabRoot
      }
    }) : null;
  }))));
};

export default AppTabs;