import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode.js';

const DarkModeButton = () => {
  const { isDark, toggleDarkMode, palette } = useDarkMode();

  const style = {
    padding: '8px 12px',
    borderRadius: 8,
    border: `1px solid ${palette.icons}`,
    background: palette.accent,
    color: palette.text,
    cursor: 'pointer'
  };

  return (
    <button style={style} onClick={toggleDarkMode} aria-pressed={isDark}>
      {isDark ? 'Light' : 'Dark'}
    </button>
  );
};

export default DarkModeButton;


