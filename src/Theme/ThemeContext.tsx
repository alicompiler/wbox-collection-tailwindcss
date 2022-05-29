import React from 'react';
import {defaultTheme} from './DefaultTheme';
import {Theme} from './Theme';

export const ThemeContext = React.createContext<Theme>({...defaultTheme, rightToLeft: false});

type ThemeProviderProps = { rtl?: boolean, theme: Partial<Omit<Theme, "rightToLeft">> };

export const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
    return <ThemeContext.Provider value={{...defaultTheme, ...props.theme, rightToLeft: !!props.rtl}}>
        {
            props.children
        }
    </ThemeContext.Provider>
}
