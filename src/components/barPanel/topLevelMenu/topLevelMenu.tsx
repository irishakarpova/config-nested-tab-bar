import React from "react";
import Button from "@material-ui/core/Button";
import { AppBarStore, MainMenuType } from "../../../store/appBarStore";
import { useStyles } from "./styles";

const MainMenu: React.FC<MainMenuType> = ({ menuItems }) => {
  const classes = useStyles();
  return (
    <AppBarStore.Consumer>
      {({ value, toggleDrawer, activeValue }) => (
        <div className={classes.root}>
          {menuItems &&
            menuItems.map((menuItem) => {
              return (
                menuItem != null &&
                menuItem.parentId === "0" && (
                  <Button
                    className={
                      activeValue === menuItem.id
                        ? classes.rootBtnActive
                        : value === menuItem.id
                        ? classes.rootBtnHover
                        : classes.rootBtn
                    }
                    value={menuItem.id}
                    key={menuItem.label}
                    onMouseOver={toggleDrawer(
                      "top",
                      true,
                      menuItem.id,
                      menuItem.label
                    )}
                  >
                    {menuItem.label}
                  </Button>
                )
              );
            })}
        </div>
      )}
    </AppBarStore.Consumer>
  );
};

export default MainMenu;
