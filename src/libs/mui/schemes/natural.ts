import { createTheme } from "@mui/material";

const themeColors = {
  primary: '#195a00',
  secondary: '#ff9f0d',
  accent: '#00AAA1'
};


export const natural = createTheme({
  colors: {
    primary: themeColors.primary,
    secondary: themeColors.secondary,
    accent: themeColors.accent
  },
  palette: {
    primary: {
      main: themeColors.primary,
    },
    secondary: {
      main: themeColors.secondary,
    },
    accent: {
      main: themeColors.accent
    }
  },
  spacing: 8,
  typography: {
    fontFamily: "Montserrat, sans-serif",
    allVariants: {
      color: '#2A3342',
    },
    h1: {
      fontWeight: 600,
      fontSize: 27
    },
    h2: {
      fontWeight: 600,
      fontSize: 34
    },
    h3: {
      fontWeight: 600,
      fontSize: 21,
    },
    h4: {
      fontWeight: 600,
      fontSize: 19
    },
    h5: {
      fontWeight: 500,
      fontSize: 17
    },
    h6: {
      fontWeight: 500,
      fontSize: 15
    },
    body1: {
      fontWeight: 400,
      fontSize: 15
    }
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,

      },
      styleOverrides: {
        root: {
          fontWeight: 600,
          textTransform: 'unset',
        },
        containedSecondary: {
          color: '#fff'
        },
        
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          width: '100%',
          border: '1px solid #D5DAE1',
          boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
          borderRadius: '8px',
          backgroundColor: '#fff',
          padding: '10px 14px',
          fontSize: '16px',
          lineHeight: '24px',
          '.MuiInputBase-input:focus': {
            boxShadow: 'unset',
          }
        }

      }
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: themeColors.accent,
        }
      }
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          fontWeight: 500
        }
      }
    }
  }
});
