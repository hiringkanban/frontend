import styled from "styled-components";
import { badgeProps } from "./type";
import { 
    borderRadius,
    colors,
    status,
    fontSize
} from '../../../styles/styleGuide';

const StyledBadge = styled.span<badgeProps>`
    background-color: ${props => status[props.bg]};
    margin-left: 5px;
    color: ${colors.white};
    font-size: ${fontSize.subtext};
    padding: 3px 5px;
    border-radius: ${borderRadius} ;
`;

export default StyledBadge;