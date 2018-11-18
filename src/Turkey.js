import styled from 'styled-components';

const Turkey = styled.div`
  position: relative;
  top: ${props => props.top || '0'}px;
  left: ${props => props.left || '0'}px;
  width: 400px;
  height: 400px;
`;

export default Turkey;
