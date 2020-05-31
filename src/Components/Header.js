import React from 'react';

/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const style = css`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  background-color: pink;
`;
function Header() {
  return (
    <header css={style}>
      <div>Markdown Editor</div>
      <div>Icon</div>
    </header>
  );
}

export default Header;
