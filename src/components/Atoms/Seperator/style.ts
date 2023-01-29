import styled from 'styled-components';
import { SeperatorProps } from './type';
import { colors } from '../../../styles/styleGuide';

const StyledSeperator = styled.span<SeperatorProps>`
  width: ${(props) => props.width};
  background-color: ${colors.gray};
  height: ${(props) => props.height}px;
`;

export default StyledSeperator;
