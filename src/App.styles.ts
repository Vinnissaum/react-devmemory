import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 56rem;
    margin: auto;
    display: flex;
    padding: 3rem 0;

    @media (max-width: 56rem){
        flex-direction: column;
    }
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    color: #2c4c44;

    @media  (max-width: 56rem){
        margin: 3.25rem 0;
        align-items: center;
    }
`;

export const Logo = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    span{
        font-size: 2.625rem;
        margin-left: 0.5rem;
        font-weight: 500;
        letter-spacing: -4px;
    }
`;

export const InfoArea = styled.div`
    width: 100%;
    margin: 0.75rem 0;

    @media (max-width: 56rem){
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
`;

export const GameArea = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;  

    @media (max-width: 56rem){
        justify-content: center;
        margin: 0 1.25rem;
    }
`;

