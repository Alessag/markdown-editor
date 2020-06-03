import React from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { ColumnFlex } from './Shared/index';

function Preview({ markdownContent, theme }) {
  const mardownFormattedContent = marked(markdownContent);
  return (
    <ColumnFlex
      css={css`
        flex: 1;
        padding: 16px;
      `}
    >
      <h1>Preview</h1>
      <div
        css={
          theme === 'dark'
            ? css`
                height: 100%;
                border-radius: 4px;
                border: none;
                box-shadow: 0 -2px 10px rgba(0, 0, 0, 1);
                font-size: 100%;
                line-height: inherit;
                overflow: auto;
                background: #000;
                padding: 8px 16px;
                color: #fff;
              `
            : css`
                height: 100%;
                border-radius: 4px;
                border: none;
                box-shadow: 2px 2px 10px #999;
                font-size: 100%;
                line-height: inherit;
                overflow: auto;
                background: #fff;
                padding: 8px 16px;
                color: #000;
              `
        }
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: mardownFormattedContent }}
      />
    </ColumnFlex>
  );
}

Preview.propTypes = {
  markdownContent: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
};

export default Preview;
