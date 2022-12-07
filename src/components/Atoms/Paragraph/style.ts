import styled from 'styled-components';
import { fontSize } from '../../../styleGuide';

interface textStyleProps {
}

export const StyledParagraph = styled.p<textStyleProps>`
    font-size: ${fontSize.paragraph};
`;
