import styled from 'styled-components';

export const CardUser = styled.div`
    width: 100%;
    background: #FFF;
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 3px 3px 6px 0px #0003;
`;

export const CardHeaderUser = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    justify-content: center;
    height: 140px;
`;

export const NameUser = styled.h3`
    margin: 0;
    width: 100%;
    text-align: center;
    text-transform: capitalize;
`;

export const EmailUser = styled.a`
    margin: 0;
    width: 100%;
    text-align: center;
    text-transform: lowercase;
    text-decoration: none;
    color: var(--color-blue-dark);
`;

export const CardContentUser = styled.div`
    display: flex;
`;

export const TextCommentUser = styled.span`
    width: 100%;
    text-align: left;
`;