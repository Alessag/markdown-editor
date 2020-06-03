import React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';
import useDarkMode from './useDarkMode';

function App() {
  const { theme, toggleTheme } = useDarkMode();
  const themeStyle =
    theme === 'light'
      ? {
          backgroundColor: '#eee',
          color: '#000',
        }
      : {
          backgroundColor: '#171616',
          color: '#fff',
        };
  return (
    <div className='App' style={themeStyle}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Main theme={theme} />
      <Footer />
    </div>
  );
}

export default App;
