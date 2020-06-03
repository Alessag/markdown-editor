import React, { useState } from 'react';
import PropTypes from 'prop-types';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { RowFlex } from './Shared/index';
import Editor from './Editor';
import Preview from './Preview';

function Main({ theme }) {
  const markdownDefault = `
# H1
## H2
### H3
#### H4
##### H5

__bold__
**bold**
_italic_`;
  const [markdownContent, setMarkdownContent] = useState(markdownDefault);
  return (
    <RowFlex
      css={css`
        padding: 32px;
        padding-top: 0px;
        height: calc(100vh - 170px);
      `}
    >
      <Editor
        markdownContent={markdownContent}
        theme={theme}
        setMarkdownContent={setMarkdownContent}
      />
      <Preview markdownContent={markdownContent} theme={theme} />
    </RowFlex>
  );
}

Main.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default Main;
