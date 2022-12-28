import styled from "styled-components";


const StyledSignIn = styled.div`
    width: 25%;
    margin: 0 auto;
    margin-top: 7.5em;

    & form {
        display: flex;
        flex-direction: column;

        & button {
            align-self: center;
        }
    }

    & h1 {
        font-weight: 100;
        color: rgb(83 87 104);
        margin-bottom: 20px;
    }

    & form {
        margin-bottom: 30px;
    }

    @media (max-width: 768px) {
        width: 80%;
    }
`;

export default StyledSignIn;