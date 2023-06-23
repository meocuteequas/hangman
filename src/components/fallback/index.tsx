import { Box, CircularProgress, styled } from '@mui/material';
import React from 'react';

const StyledBox = styled(Box)(
  () => `
    position: fixed;
    top: 50%;
    transform: translate(-50%, -50%);
    left: calc(50% + 290px / 2);
  `
);
export default function Fallback() {
  return <></>;
}
