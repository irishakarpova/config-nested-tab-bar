import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import logo from '../img/LOGO.svg';
const useStyles = makeStyles(theme => ({
  root: {
    height: 25,
    [theme.breakpoints.up('sm')]: {
      height: 40
    }
  }
}));
export default function () {
  const classes = useStyles();
  return /*#__PURE__*/React.createElement(Link, {
    href: "/"
  }, /*#__PURE__*/React.createElement(Box, {
    mr: 2,
    pl: 1.5
  }, /*#__PURE__*/React.createElement("img", {
    src: logo,
    className: classes.root,
    alt: "LOGO"
  })));
}