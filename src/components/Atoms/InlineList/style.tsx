import styled from "styled-components";

const StyledList = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;

    & li {
        margin-left: 10px;
        font-size: 14px;

        svg {
            font-size: 20px;
        }
    }
`;

export default StyledList;