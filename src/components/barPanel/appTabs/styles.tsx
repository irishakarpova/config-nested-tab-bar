import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tabs: {
      minHeight: 66,
      color: theme.palette.primary.main
    },
    tabRoot: {
      padding: 8,
      zIndex: 1,
      boxShadow: "none",
      "&:hover": {
        boxSizing: "borderBox",
        boxShadow: "0px -2px 0px #93969a inset"
      }
    }
  })
);
