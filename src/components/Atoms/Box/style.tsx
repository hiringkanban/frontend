import styled from "styled-components";
import { borderRadius, colors } from "../../../styles/styleGuide";

const StyledBox = styled.div<{padding?: string, margin?:string}>`
    padding: ${props => props.padding ? props.padding : '18px'};
    margin: ${props => props.margin ? props.margin : '0'} ;
    background-color: #fff;
    border-radius: ${borderRadius};
    box-shadow: 0 2px 6px 0 rgb(67 89 113 / 12%);
    color: ${colors.gray};

    h1,h2,h3,h4,h5 {
        font-weight: 300;
    }
`;

export default StyledBox;