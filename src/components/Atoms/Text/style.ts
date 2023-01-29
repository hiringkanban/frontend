import styled from 'styled-components';
import { fontSize, textColors } from '../../../styles/styleGuide';
import { TextProps } from './type';

const StyledText = styled.p<TextProps>`
  font-size: ${fontSize.text};
  color: ${textColors.secondary_text_color};
  text-align: ${(props) => props.align};
  font-weight: ${(props) => props.weight};
`;
export default StyledText;
