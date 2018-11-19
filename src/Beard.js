import styled from 'styled-components';

const Beard = styled.div`
  position: absolute;
  top: 0;
  left: 10px;
  width: 30px;
  height: 100px;
  background: red;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  &::before {
    content: '';
    position: absolute;
    left: -10px;
    width: 10px;
    height: 90px;
    background: red;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
  }
  &::after {
    content: '';
    position: absolute;
    right: -10px;
    width: 10px;
    height: 90px;
    background: red;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
  }
`;

export default Beard;
