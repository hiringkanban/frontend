import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { textColors } from '../../../styles/styleGuide';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => (props.color ? props.color : textColors.links_color)};
`;

export default StyledLink;
