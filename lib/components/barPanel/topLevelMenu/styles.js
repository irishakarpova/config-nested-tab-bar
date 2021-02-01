import { createStyles, makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(theme => createStyles({
  root: {
    background: '#33404d',
    width: '100%',
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    [theme.breakpoints.up('sm')]: {
      background: '#2A3743',
      flexGrow: 1,
      width: '100%',
      minWidth: 400,
      alignItems: "center",
      justifyContent: "flex-start"
    }
  },
  rootBtn: {
    color: theme.palette.primary.light,
    padding: '0 15px',
    height: 40,
    borderRadius: 0,
    [theme.breakpoints.up('sm')]: {
      minHeight: 76
    },
    '&:hover': {
      backgroundColor: '#343f4a'
    }
  },
  rootBtnActive: {
    color: theme.palette.primary.light,
    backgroundColor: theme.palette.primary.dark,
    padding: '0 15px',
    height: 40,
    borderRadius: 0,
    [theme.breakpoints.up('sm')]: {
      minHeight: 76
    }
  },
  rootBtnHover: {
    color: theme.palette.primary.light,
    backgroundColor: '#343f4a',
    padding: '0 15px',
    height: 40,
    borderRadius: 0,
    [theme.breakpoints.up('sm')]: {
      minHeight: 76,
      '&:hover': {
        backgroundColor: '#343f4a'
      }
    }
  }
}));