import styled from 'styled-components';
import { borderRadius, status } from '../../../styles/styleGuide';

const StyledAlert = styled.div<{ type: string }>`
  display: flex;
  padding: 15px;
  background-color: ${(props) => status[props.type]};
  border-radius: ${borderRadius};
`;

export default StyledAlert;
