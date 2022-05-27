import { createContext, useCallback, useMemo, useState, PropsWithChildren, useContext } from "react";

import { LightTheme, DarkTheme } from './../themes';

import { ThemeProvider, useTheme } from "@emotion/react";
import { Box } from "@mui/system";

interface IThemeContextData {
    themeName: 'light' | 'dark'
    toggleTheme: () => void;
}

const ThemeContext = createContext( {} as IThemeContextData );

export const useAppThemeContext = () => {
    return useContext(ThemeContext);
}


export const AppThemePrvoider: React.FC<PropsWithChildren<IThemeContextData>> = ( { children } ) => {
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
            <ThemeProvider theme={LightTheme}>
                <Box width="100vw" height='100vh' bgcolor={theme.palette.background.default} >
                    {children}
                </Box>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}