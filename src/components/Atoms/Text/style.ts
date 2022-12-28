import styled from 'styled-components';
import { fontSize, textColors } from '../../../styles/styleGuide';
import { textProps } from "./type";

export const StyledText = styled.p<textProps>`
    font-size: ${fontSize.text};
    color: ${textColors.secondary_text_color};
    text-align: ${props => props.align};
    font-weight: ${props => props.weight} ;
`;
