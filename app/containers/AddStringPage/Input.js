import styled from 'styled-components';

const Input = styled.input`
  outline: none;
  border-bottom: 1px dotted #999;
  color: ${props => props.inputColor || '#000000'};
`;

export default Input;
