import styled from 'styled-components';
import { fontSize } from '../../../styleGuide';

interface textStyleProps {
}

export const StyledText = styled.p<textStyleProps>`
    font-size: ${fontSize.text};
`;
