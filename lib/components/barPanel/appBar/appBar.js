import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { useStyles } from './styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';
import MainMenu from '../topLevelMenu/topLevelMenu';
import AppBarLogo from '../../appLogo';
import AppTabs from '../appTabs/appTabs';
import { AppBarStore } from '../../../store/appBarStore';
import { UseCompParams } from './useParams';
import menuItems from '../../../data.json';
export default function Appbar() {
  const classes = useStyles();
  return /*#__PURE__*/React.createElement(AppBarStore.Provider, {
    value: UseCompParams(menuItems)
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/React.createElement(Router, null, /*#__PURE__*/React.createElement(AppBar, {
    className: classes.appBar,
    position: "static"
  }, /*#__PURE__*/React.createElement(Toolbar, {
    classes: {
      root: classes.root
    },
    disableGutters: true
  }, /*#__PURE__*/React.createElement(Hidden, {
    xsDown: true
  }, /*#__PURE__*/React.createElement(Box, {
    className: classes.boxLogo
  }, /*#__PURE__*/React.createElement(AppBarLogo, null))), /*#__PURE__*/React.createElement(Box, {
    className: classes.toolBarContent
  }, /*#__PURE__*/React.createElement(Box, {
    className: classes.navigation
  }, /*#__PURE__*/React.createElement(Box, {
    className: classes.boxLogoSmScreen
  }, /*#__PURE__*/React.createElement(Hidden, {
    smUp: true
  }, /*#__PURE__*/React.createElement(AppBarLogo, null))), /*#__PURE__*/React.createElement(MainMenu, {
    menuItems: menuItems
  }))))), /*#__PURE__*/React.createElement(AppTabs, {
    menuItems: menuItems
  }), /*#__PURE__*/React.createElement("br", null))));
}