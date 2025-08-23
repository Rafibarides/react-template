import React, { useCallback, useMemo, useState, useEffect } from 'react';
import { getPalette } from '../utils/colors.js';
import { DarkModeContext } from './DarkModeContext.js';

export const DarkModeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = useCallback(() => {
    setIsDark((prev) => !prev);
  }, []);

  const palette = useMemo(() => getPalette(isDark), [isDark]);

  // Update CSS custom properties when theme changes
  useEffect(() => {
    document.documentElement.style.setProperty('--bg-color', palette.background);
    document.documentElement.style.setProperty('--text-color', palette.text);
  }, [palette]);

  const value = useMemo(() => ({ isDark, toggleDarkMode, palette }), [isDark, toggleDarkMode, palette]);

  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
};




