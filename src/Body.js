import styled from 'styled-components';
import { wiggle } from './animations';

const Body = styled.div`
  width: 300px;
  height: 300px;
  background: brown;
  border-radius: 50%;
  position: absolute;
  top: 50px;
  animation: ${wiggle} 5s infinite;
`;

export default Body;
