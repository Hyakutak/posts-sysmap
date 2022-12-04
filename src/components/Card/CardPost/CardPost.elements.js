import styled from 'styled-components';

export const CardPosts = styled.div`
    width: 30%;
    min-height: 250px;
    @media screen and (max-width: 769px) {
        width: 100%;
    }
    @media screen and (max-width: 1000px) and (min-width: 770px)  {
        width: 47%;
    }
`;

export const Content = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    box-shadow: 3px 3px 6px 0px #0003;
    border-radius: 10px;
`;

export const TitlePost = styled.h2`
    text-transform: capitalize;
    color: #333;
    height: 56px;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    @media screen and (max-width: 769px) {
        margin-bottom: 10px;
    }
`;

export const TextPost = styled.span`
    display: block;
    height: 56px;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
`;

export const CardActionsButton = styled.div`
    padding: 1rem;
    border-top: 1px solid var(--color-blue-light);
    width: 100%;
`;

export const ButtonMoreInfo = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 0.3rem;
    max-height: 25px;
    border: 0;
    background: transparent;
    &:hover {
        color: var(--color-blue-dark);
    }
`;