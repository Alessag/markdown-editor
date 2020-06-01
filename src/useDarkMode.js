import { useState, useEffect } from 'react';

export default () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);

  return {
    theme,
    toggleTheme,
  };
};
