import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext.js';

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
};
