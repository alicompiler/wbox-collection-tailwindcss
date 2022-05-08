import React from 'react';
import { defaultTheme } from './DefaultTheme';
import { Theme } from './Theme';

export const ThemeContext = React.createContext<Theme>(defaultTheme);
export const ThemeProvider = ThemeContext.Provider;
