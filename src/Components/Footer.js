import React from 'react';

/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const style = css`
  background-color: red;
  padding: 20px 0;
  position: absoulte;
  text-align: center;
  bottom: 0px;
  overflow: hidden;
  widith: 100%;
  color: white;
`;

const aStyles = css`
  text-decoration: none;
  color: white;
`;

function Footer() {
  return (
    <footer css={style}>
      <span>{`</>`} </span>
      <span>
        with{' '}
        <a
          css={aStyles}
          href='https://reactjs.org'
          target='_blank'
          rel='noreferrer noopener'
        >
          React.js{' '}
        </a>
        by{' '}
        <a
          css={aStyles}
          href='hhttps://github.com/Alessag'
          target='_blank'
          rel='noreferrer noopener'
        >
          Alessandra
        </a>
      </span>
    </footer>
  );
}

export default Footer;
