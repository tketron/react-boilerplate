import styled from 'styled-components';

const StringContainer = styled.div`
  font-size: ${props => props.fontSize || '16px'};
  padding: 0.5em;
`;

export default StringContainer;
