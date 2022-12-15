import styled from 'styled-components';
import { fontSize } from '../../../styles/styleGuide';

interface textStyleProps {
}

export const StyledParagraph = styled.p<textStyleProps>`
    font-size: ${fontSize.paragraph};
`;
