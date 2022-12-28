import styled from "styled-components";
import { seperatorProps } from "./type";
import { colors } from '../../../styles/styleGuide';

const StyledSeperator = styled.span<seperatorProps>`
    width: ${props => props.width};
    background-color: ${colors.gray};
    height: ${props => props.height}px;
`;

export default StyledSeperator;