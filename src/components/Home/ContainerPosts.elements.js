import styled from 'styled-components';

export const MainContainer = styled.div`
    width: 1100px;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    @media screen and (max-width: 769px) {
        width: 100%;
    }
    @media screen and (max-width: 1000px) and (min-width: 770px)  {
        width: 900px;
    }
`;

export const ContentCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 1rem;
    @media screen and (max-width: 1000px) and (min-width: 770px)  {
        align-items: center;
        justify-content: center;
    }
`;

export const ContainerPagination = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    gap: 7px;
`;

export const ButtonPagination = styled.button`
    cursor: pointer;
    background: transparent;
    border: 1px solid var(--color-blue-dark);
    padding: 0.2rem;
    &:hover {
        color: white;
        background: var(--color-green);
    }
`;