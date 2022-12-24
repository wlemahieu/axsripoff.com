/**
 * Theme definition for MUI
 */
import { createTheme, Theme } from '@mui/material/styles';

const useCreateTheme = (): Theme => {
  return createTheme({
    typography: {
      fontFamily: 'Source Sans Pro',
      h1: {
        fontSize: '66px',
        fontWeight: 500,
      },
      h2: {
        fontSize: '56px',
        fontWeight: 500,
        marginBottom: '1rem',
      },
      h3: {
        fontSize: '46px',
      },
      h4: {
        fontSize: '36px',
      },
      h5: {
        fontSize: '26px',
      },
      h6: {
        fontSize: '18px',
        fontWeight: 600,
      },
      body2: {
        marginBottom: '1rem',
      },
    },
    palette: {
      primary: {
        // sky blue
        light: '#2C7DA8',
        main: '#086CA1',
        dark: '#06537D',
        contrastText: '#fff',
      },
      secondary: {
        // yellow
        light: '#FFD533',
        main: '#FEC900',
        dark: '#C69D00',
        contrastText: '#000',
      },
      /*
    primary: {
      // blue
      light: '#345DAF',
      main: '#1144A9',
      dark: '#0C3483',
      contrastText: '#fff',
      // main: '#1144A9', // blue
      // main: '#FB0006', // red
      // main: '#FDA600', // orange
      // main: '#057C9E', // green
    },
    secondary: {
      // orange
      light: '#FFBB39',
      main: '#FDA600',
      dark: '#C58100',
      contrastText: '#000',
    },
    secondary: {
      // green
      light: '#37D22F',
      main: '#0ACD00',
      dark: '#089F00',
      contrastText: '#000',
    },*/
    },
  });
};

export default useCreateTheme;
