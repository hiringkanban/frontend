import styled from 'styled-components';
import { fontSize, textColors } from '../../../styles/styleGuide';

interface textStyleProps {
}

export const StyledText = styled.p<textStyleProps>`
    font-size: ${fontSize.text};
    color: ${textColors.secondary_text_color}
`;
