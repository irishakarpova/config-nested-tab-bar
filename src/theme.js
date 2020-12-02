import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      type: 'light',
      primary: {
        light: '#C0C3C6',
        main: '#2A3743',
        dark: '#404E5C'
      },
      secondary: {
        main: '#C69A50',
        light: '#fafafa',
      },
      text: {
        primary: "#2A3743", 
        secondary: "#93969a"
      }, 
      contrastThreshold: 3,
      tonalOffset: 0.2,
    },
    overrides: {
      MuiInputBase:{
        input:{
          background: '#fff',
        }
      },
      MuiFormHelperText:{
        contained:{
          position: 'absolute',
          display: 'block',
          marginTop: 39,
          marginLeft: 18,
          padding: '0 2px',
          textAlign: 'right',
          background: '#fff',
          zIndex: 100,
        },
        root:{
          lineHeight: .9,
          letterSpacing: 0
        }

      },
      MuiTab: {
        root: {
          minWidth: 0,
          '@media (min-width: 0px)': {
            minWidth: 100
          },
        },
        wrapper: {
          alignItems: 'center',
          lineHeight: 1.2,
          padding: '0 10px'
        },
      },   
      MuiButton:{
        label:{
          fontSize: '0.675rem',
          '@media ( min-width:596px )': {
            fontSize: '0.875rem',
          }
        },
        root:{
          minWidth: '10px',
          '&:hover': ""
        },
      },
      MuiTableCell:{
        root: {
          border: '1px solid rgb(239 239 239)',
          borderTop: 'none'
        },
        head:{
          color: "#C0C3C6",
          background: "#2A3743",
        },
      },
      MuiDropzoneArea:{
        root:{
          minHeight: 100
        }
      },
      MuiDropzonePreviewList:{
        image:{
          maxWidth: 'none'
        }
      },
      
      /*MuiDrawer: {
        paperAnchorTop: {
          top: 96,
          '@media (min-width:596px)': {
            top: 76,
          },
        },  
      },
      */

      MuiPopover:{
        root:{
          top: 77,
          zIndex: 0,
        }
      },
      MuiPaper:{
        elevation9:{
          boxShadow: '0px 1px 1px -9px rgba(0,0,0,0.01), 0px 2px 5px 0px rgba(0,0,0,0.02), 0px 0px 18px 2px rgba(0,0,0,0.03)',
        }
      },
      
      MuiOutlinedInput:{
        input:{
          padding: 14
        }
      },
 
      MuiInputLabel: { 
        root: { 
          background: '#fff',
          borderRadius: 0,
          "&$focused": { 
            background: '#FAFAFA',
            padding: '0px 6px 0px 6px', 
            borderRadius: 2
          }
        },
        outlined:{
          transform: 'translate(20px, 16px) scale(1)',
        }
      },
      MuiAccordionSummary: {
        root:{
          display: 'flex',
          justifyContent: 'center',
          width: 200,
          marginLeft:"calc(100% - 215px)",
        },
        content:{
          display: 'inline-block',
          margin: 0
      }

      },
      MuiAccordionDetails: {
        root:{
          padding: '0 16px 10px 16px'
       },
      },
  
     },
    typography: {
      body2: {
        color: '#C0C3C6'
      }
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 596,
        md: 850,
        lg: 950,
        xl: 1400,
      },
    },

  });

  theme.typography.h3 = {
    fontSize: '1.2rem',
    '@media (min-width:600px)': {
      fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2.4rem',
    },
  };

  export default theme
