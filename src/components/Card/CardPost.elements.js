import styled from 'styled-components';

export const CardPosts = styled.div`
    width: 30%;
    min-height: 300px;
`;

export const Content = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    box-shadow: 3px 3px 6px 0px #0008;
`;

export const TitlePost = styled.h2`
    color: #333;
    height: 65px;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;