import styled from 'styled-components';
import { wiggle, walk } from './animations';

const Legs = styled.div`
  position: absolute;
  top: 275px;
  left: ${props => props.left || 100}px;
  width: 15px;
  height: 100px;
  background: gold;
  z-index: -1;
  animation: ${walk} 2s infinite;
  animation-delay: ${props => props.delay || '0'}s;
  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 2.5px;
    width: 10px;
    height: 100px;
    background: gold;
  }
  &::before {
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
    border-bottom: 25px solid gold;
    top: 195%;
    left: -17px;
  }
`;

export default Legs;
