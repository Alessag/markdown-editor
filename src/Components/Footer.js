import React from 'react';

/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const style = css`
  background-color: red;
  padding: 20px 0;
  display: flex;
  justify-content: center;
`;
function Footer() {
  return (
    <footer css={style}>
      <h1>Hey I am the footer!</h1>
    </footer>
  );
}

export default Footer;
