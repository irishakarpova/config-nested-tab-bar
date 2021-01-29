
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>  
createStyles({
    tabs:{
      minHeight: 66,
      color: "#873b3b",
      [theme.breakpoints.up('sm')]: {
          minHeight: 66,
      },
    },
    tabRoot:{
        padding: 8,
        zIndex: 1,
        boxShadow: "none",
        '&:hover': {
          boxSizing: 'borderBox',
          boxShadow: "0px -2px 0px #93969a inset"
      },
    },
  }));
  