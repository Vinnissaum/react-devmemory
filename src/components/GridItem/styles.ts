import styled from "styled-components";

type ContainerProps = {
    bgcolor: boolean;
}

export const Container = styled.div<ContainerProps>`
    background-color: ${props => props.bgcolor ? '#E2E3E3' : '#53277E'};
    height: 6.125rem;
    border-radius: 1.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 1px solid transparent;

    &:hover{
        border: 1px solid #E2E3E3;
    }
`;

export const Icon = styled.img`
    width: 4rem;
`;