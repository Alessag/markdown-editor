/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { FiSun } from 'react-icons/fi';
import { FaMoon } from 'react-icons/fa';
import PropTypes from 'prop-types';

function Header({ theme, toggleTheme }) {
  return (
    <header
      css={
        theme === 'dark'
          ? css`
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              background-color: #553abf;
              padding: 24px 32px;
              font-size: 16px;
            `
          : css`
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              background-color: #41f8f8;
              padding: 24px 32px;
              box-shadow: 0px -2px 8px #000;
              font-size: 16px;
            `
      }
    >
      <div>Markdown Editor</div>
      <div
        role='presentation'
        css={css`
          cursor: pointer;
        `}
        onClick={toggleTheme}
      >
        {theme === 'dark' ? <FaMoon /> : <FiSun />}
      </div>
    </header>
  );
}

Header.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default Header;
