import styled from 'styled-components';

const Eyes = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  background: black;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 40px;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    background: black;
  }
`;

export default Eyes;
