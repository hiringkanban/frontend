import styled from 'styled-components';
import { textColors } from '../../../styles/styleGuide';

const StyledMenu = styled.ul`
    display: flex;
    list-style: none;

    & li {
        margin-right: 2em;

        & a {
            text-decoration: none;
            color: ${textColors.secondary_text_color}
        }
    }
`;

export default StyledMenu;