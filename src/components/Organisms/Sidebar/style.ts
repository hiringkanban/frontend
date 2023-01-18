import styled from "styled-components";
import { borderRadius, colors } from "../../../styles/styleGuide";

export const StyledLogo = styled.div`
    display: flex;
    align-items: center;
    height: 70px;
    padding: 20px;
`;

export const OpenIcon = styled.div`
    position: absolute;
    top: 20px;
    left: 20px;
    cursor: pointer;
    z-index: 5;

    svg {
        font-size: 30px;
    }
`;
export const StyledSideBar = styled.div<{toggle: boolean}>`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 260px;
    padding: 0 16px ;
    background-color: ${colors.white};
    z-index: 8;
    transition: all 0.5s ease-out;
    box-shadow: 0 0.125rem 0.375rem 0 rgb(161 172 184 / 12%);
    @media (max-width: 768px) {
        left: ${props => props.toggle ? '0px': '-100%'};

        & ul {
            li {
                justify-content: left;
                border-bottom: none;
            }
        }
    }

    ul {
        margin: 25px 0;
        li {
            margin: 0;
            width: 100%;
            padding: 12px 20px;
            cursor: pointer;
            a {
                color: ${colors.gray};
                font-size: 0.975rem;
                font-weight: 500;
                margin-left: 10px;
            }

            svg {
                color: ${colors.gray};
            }

            :hover {
                background-color: rgb(0, 0, 0, 3%);
                transition-duration: .2s;
                transition-property: color,background-color;
                border-radius: ${borderRadius};
            }

            // this style shoud be for active element, only here for demenstrate
            :first-child {
                color: ${colors.primary};
                background-color: rgba(105,108,255,.16);
                border-radius: ${borderRadius};
                a, svg {
                    color: ${colors.primary};
                    font-weight: 600;
                }
            }
        }
    }
`;

export const CLoseIcon = styled.div`
    position: absolute;
    top: 20px;
    right: 10px;
    font-size: 20px;
    color: #999999;
    @media (min-width: 769px) {
        display: none;
    }

`;