import styled from "styled-components";
import flexboxProps from "./type";

const StyledFlexBox = styled.div<flexboxProps>`
    display: flex;
    margin: ${props => props.margin};
    padding: ${props => props.padding};
    flex-direction: ${props => props.direction};
    justify-content: ${props => props.justify};
    align-items: ${props => props.alignItem};
    align-content: ${props => props.alignContent};
    gap: ${props => props.gap};
    flex-wrap: ${props => props.flexWrap};
    flex-flow: ${props => props.flexFlow};
    height: ${props => props.height}px;
`;

 export default StyledFlexBox;
