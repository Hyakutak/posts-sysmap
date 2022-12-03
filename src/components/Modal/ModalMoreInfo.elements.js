import styled from 'styled-components';

export const ContentMain = styled.div`
    background: #FFF;
    padding: 14px;
    position: relative;
`;

export const PostContent = styled.div`
    width: 800px;
    height: 100vh;
    margin: 0 auto;
`;

export const ContentComment = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    background: #FFF;
`;

export const ButtonClose = styled.button`
    position: absolute;
    right: -10px;
    border-radius: 5px;
    background: red;
    color: white;
    border: 0;
    font-size: 18px;
`;