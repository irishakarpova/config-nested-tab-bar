import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      light: "#C0C3C6",
      main: "#2A3743",
      dark: "#404E5C"
    },
    secondary: {
      main: "#C69A50",
      light: "#fafafa"
    },
    text: {
      primary: "#2A3743",
      secondary: "#93969a"
    },
    contrastThreshold: 3,
    tonalOffset: 0.2
  },
  overrides: {
    MuiTab: {
      root: {
        minWidth: 0,
        "@media (min-width: 0px)": {
          minWidth: 100
        }
      },
      wrapper: {
        alignItems: "center",
        lineHeight: 1.2,
        padding: "0 10px"
      }
    },
    MuiButton: {
      label: {
        fontSize: "0.675rem",
        "@media ( min-width:596px )": {
          fontSize: "0.875rem"
        }
      },
      root: {
        minWidth: "10px",
        "&:hover": ""
      }
    },

    MuiPaper: {
      elevation9: {
        boxShadow:
          "0px 1px 1px -9px rgba(0,0,0,0.01), 0px 2px 5px 0px rgba(0,0,0,0.02), 0px 0px 18px 2px rgba(0,0,0,0.03)"
      }
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 596,
      md: 850,
      lg: 950,
      xl: 1400
    }
  }
});
export default theme;
