import { createContext } from 'react';
import { getPalette } from '../utils/colors.js';

export const DarkModeContext = createContext({
  isDark: false,
  toggleDarkMode: () => {},
  palette: getPalette(false)
});
