import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: theme.palette.primary.main,
    height: 76,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  rootMenu: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  menuItem: {
    width: 150,
    height: 30,
    background: grey[200],
    borderRadius: 5,
    margin: theme.spacing(2)
  },
  menuItemLogo: {
    width: 96,
    height: 40,
    background: grey[200],
    borderRadius: 5,
    margin: theme.spacing(2)
  }
}));

export default function (props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.rootMenu}>
        <div className={classes.menuItemLogo}></div>
      </div>
      <div className={classes.rootMenu}>
        <div className={classes.menuItem}></div>
        <div className={classes.menuItem}></div>
        <div className={classes.menuItem}></div>
      </div>
      <div className={classes.rootMenu}>
        <div className={classes.menuItem}></div>
      </div>
    </div>
  );
}
