import { keyframes } from 'styled-components';

export const wiggle = keyframes`
  from {
    left: inherit;
  }
  50% {
    left: 25px;
  }
  to {
    left: inherit;
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
