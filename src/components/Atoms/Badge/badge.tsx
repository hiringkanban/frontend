import styled from "styled-components";
import StyledBadge from "./style";
import { badgeProps } from "./type";

const Badge:React.FC<badgeProps> = ({bg = 'info', children}) => {
    return (
        <StyledBadge bg={bg}> {children} </StyledBadge>
    )
}

export default Badge;