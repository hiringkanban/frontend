import styled from "styled-components";
import { sectionProps } from "./type";

const StyledSection = styled.div<sectionProps>`
    position: relative;
    width: calc(100% - ${props => props.left ? props.left : 0});
    left: ${props => props.left};
    right: ${props => props.right};
`;

export default StyledSection;