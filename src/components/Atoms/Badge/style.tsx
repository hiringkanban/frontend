import styled from 'styled-components';
import { BadgeProps } from './type';
import { borderRadius, colors, status, fontSize } from '../../../styles/styleGuide';

const StyledBadge = styled.span<BadgeProps>`
  background-color: ${(props) => status[props.bg]};
  margin-left: 5px;
  color: ${colors.white};
  font-size: ${fontSize.small_text};
  padding: 3px 5px;
  border-radius: ${borderRadius};
`;

export default StyledBadge;
