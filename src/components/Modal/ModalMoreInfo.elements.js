import styled from 'styled-components';
import { device } from '../../Device';

export const ContentMain = styled.div`
    background: #FFF;
    padding: 14px;
    position: relative;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
`;

export const PostContent = styled.div`
    width: 1000px;
    margin: 0 auto;
    padding: 10px;
    overflow: auto;
    @media ${device.mobileL} {
        width: 100%;
    }
    @media ${device.tablet} {
        width: 100%;
    }
`;

export const TitlePost = styled.h2`
    font-weight: bold;
    font-size: 2rem;
    text-transform: capitalize;
    padding: 1rem;
    text-align: center;
    color: var(--color-blue-dark);
`;

export const TextPost = styled.span`
    padding: 1rem;
    text-align: left;
    display: block;
`;

export const ContentComment = styled.div`
    display: grid;
    grid: "1fr 1fr 1fr";
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 10px;
    padding: 1.2rem;
    background: #FFF;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    @media ${device.mobileL} {
        grid: "1fr";
    }
    @media ${device.tablet} {
        grid: "1fr 1fr";
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
`;

export const ButtonClose = styled.button`
    position: absolute;
    right: 0;
    top: 0;
    background: transparent;
    color: var(--color-blue-dark);
    border: 0;
    font-size: 18px;
    padding: 0.3rem 0.5rem;
    border-top-right-radius: 10px;
    &:hover {
        color: white;
        background: red;
    }
`;