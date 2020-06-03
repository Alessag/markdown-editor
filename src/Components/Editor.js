import React from 'react';
import PropTypes from 'prop-types';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { ColumnFlex } from './Shared/index';

function Editor({ markdownContent, setMarkdownContent, theme }) {
  const handleChange = (event) => {
    setMarkdownContent(event.target.value);
  };

  return (
    <ColumnFlex
      css={css`
        flex: 1;
        padding: 16px;
      `}
    >
      <h1>Editor</h1>
      <textarea
        onChange={handleChange}
        css={
          theme === 'dark'
            ? css`
                height: 100%;
                border-radius: 4px;
                border: none;
                box-shadow: 0 -2px 10px rgba(0, 0, 0, 1);
                background: #000;
                color: #fff;
                font-size: 100%;
                line-height: inherit;
                padding: 8px 16px;
                resize: none;
                overflow: auto;
                &:focus {
                  outline: none;
                }
              `
            : css`
                height: 100%;
                border-radius: 4px;
                border: none;
                box-shadow: 2px 2px 10px #999;
                font-size: 100%;
                line-height: inherit;
                padding: 8px 16px;
                resize: none;
                overflow: auto;
                &:focus {
                  outline: none;
                }
              `
        }
        value={markdownContent}
      />
    </ColumnFlex>
  );
}

Editor.propTypes = {
  markdownContent: PropTypes.string.isRequired,
  setMarkdownContent: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
};

export default Editor;
