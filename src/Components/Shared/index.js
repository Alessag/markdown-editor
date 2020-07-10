import React from 'react';
import styled from '@emotion/styled';

export const ColumnFlex = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RowFlex = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;
