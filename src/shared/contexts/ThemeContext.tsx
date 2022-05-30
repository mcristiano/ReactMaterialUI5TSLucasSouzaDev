import { createContext, useCallback, useMemo, useState, useContext, PropsWithChildren } from 'react';

import { LightTheme, DarkTheme } from './../themes';

import { ThemeProvider } from '@emotion/react';
import { Box } from '@mui/system';


interface IThemeContextData {
    themeName: 'light' | 'dark'
    toggleTheme: () => void;
    // children?: React.ReactNode;
}

const ThemeContext = createContext( {} as IThemeContextData );

export const useAppThemeContext = () => {
  return useContext(ThemeContext);
};

export const AppThemeProvider = ( {children} : PropsWithChildren<{}> ) => {
  const [themeName, setThemeName] = useState<'light' | 'dark'> ('light');

  const toggleTheme = useCallback(() => {
    setThemeName( oldThemeName => oldThemeName === 'light' ? 'dark' : 'light' );       
  }, []);

  const theme = useMemo(() => {
    if (themeName==='light') return LightTheme;
    return DarkTheme;
  }, [themeName]);

  return (
    <ThemeContext.Provider value={ {themeName, toggleTheme} }>
      <ThemeProvider theme={theme}>
        <Box 
          width="100vw" 
          height='100vh' 
          bgcolor={theme.palette.background.default} >

          {children}

        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};