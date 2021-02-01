import { createStyles, makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(theme => createStyles({
  root: {
    zIndex: 100
  },
  toolBarContent: {
    background: '#2A3743',
    zIndex: 500,
    display: 'flex',
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexGrow: 1,
    minHeight: 76,
    [theme.breakpoints.up('sm')]: {
      alignItems: "center",
      justifyContent: "flex-end"
    }
  },
  logoImage: {
    height: 40
  },
  navigation: {
    background: '#2A3743',
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    justifyContent: "flex-start",
    alignItems: "center",
    minHeight: 76,
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row-reverse',
      justifyContent: "flex-end",
      width: '100%',
      background: '#2A3743'
    }
  },
  boxLogoSmScreen: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "flex-start",
    alignItems: "center",
    minHeight: 56,
    width: '100%'
  },
  boxLogo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: "center",
    minHeight: 76,
    background: '#2A3743'
  },
  appBar: {
    zIndex: 100
  }
}));