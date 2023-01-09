import React from 'react';
import styled from 'styled-components';
import { textColors } from '../../../styles/styleGuide';
import { menuProps } from './type';

const StyledMenu = styled.ul<menuProps>`
    display: flex;
    align-items: center;
    list-style: none;
    flex-direction: ${props => props.stacked ? 'column' : 'row'};
    & li {
        margin-left: 2em;

        @media (max-width: 768px) {
            display: flex;
            justify-content: center;
            padding: 1em;
            border-bottom: 1px solid #f1e6e6;
            text-align: center;
            width: 80%;
            margin-left: 0;
            align-items: center;

            &:last-child {
                ${props => props.lastChildStyle}
            }
        }

        & a {
            font-size: 1rem;
            font-weight: 300;
            text-decoration: none;
            color: ${textColors.secondary_text_color};
        }
    }

    & svg {
        color: #ffffff;
    }

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`;

export default StyledMenu;