import React from 'react';

/** @jsx jsx */
import { jsx, css } from '@emotion/core';

function Footer() {
  return (
    <footer>
      <div
        className='footer-description'
        css={css`
          padding: 16px 0px;
          overflow: hidden;
          position: absolute;
          width: 100%;
          text-align: center;
          bottom: 0px;
          color: #eee;
          background: #000;
        `}
      >
        <span>{`</>`} </span>
        <span>
          with{' '}
          <a
            href='https://reactjs.org'
            target='_blank'
            rel='noreferrer noopener'
          >
            React.js{' '}
          </a>
          by{' '}
          <a
            href='https://github.com/Alessag'
            target='_blank'
            rel='noreferrer noopener'
          >
            Alessandra
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
