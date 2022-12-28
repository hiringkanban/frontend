import styled from "styled-components";
import { Link } from "react-router-dom";
import { textColors } from '../../../styles/styleGuide';

const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${textColors.links_color};
`;

export default StyledLink;