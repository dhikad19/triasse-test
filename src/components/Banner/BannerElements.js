import styled from 'styled-components';

export const BannerContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 4.5rem;
    gap: 5rem;
    height: 100%;
`

export const BannerImg = styled.img`
    height: 250px;
    width: 650px;

    @media screen and (max-width: 690px){
        height: 200px;
        width: 450px;
        gap: 0;
        margin: 1.5rem;
    }

    @media screen and (max-width: 470px){
        display: none;
    }
`