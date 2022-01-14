import styled from "styled-components";

export const MediaContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%
`
export const MediaTitle = styled.h2`
    font-size: 35px;
    margin-bottom: 20px;
    margin-top: 1rem;
    font-weight: 400px;

    @media screen and (max-width: 660px){
        font-size: 25px;
    }
`
export const MediaWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 2.2rem;
    padding: 2rem 13rem;
    margin-bottom: 7rem;

    @media screen and (max-width: 750px){
        padding: 2rem 7rem;
    }

    @media screen and (max-width: 430px){
        padding: 2rem 0rem;
    }


`
export const MediaImg = styled.img`
    width: 80px;
    height: 35px;
`