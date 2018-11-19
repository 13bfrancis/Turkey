import { keyframes } from 'styled-components';

export const wiggle = keyframes`
  from {
    left: 0;
  }
  50% {
    left: 25px;
  }
  to {
    left: 0;
  }
`;
export const walk = keyframes`
  from {
    top: 250px;
  }
  50% {
    top: 280px;
  }
  to {
    top: 250px;
  }
`;
