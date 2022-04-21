import styled from "styled-components";

export const Container = styled.div`
    width: 11.5rem;
    height: 3.1rem;
    display: flex;
    background-color: #53277E;
    align-items: center;
    opacity: 0.6;
    transition: all ease .3s;
    border-radius: 0.7rem;
    cursor: pointer;
    margin-bottom: 0.5rem;

    &:hover{
        opacity: 1;
    }
`;

export const IconArea = styled.div`
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid rgba(255, 255, 255, .2);
    padding: 0 1rem;
`;

export const Icon = styled.img`
    height: 1.25rem;
`;

export const Label = styled.div`
    color: #FFF;
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
`;