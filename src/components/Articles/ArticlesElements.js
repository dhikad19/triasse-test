import styled from "styled-components"

export const ArticlesContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
`
export const ArticlesTop = styled.div`

`
export const ArticlesTitle = styled.h2`
    font-size: 35px;
    margin-bottom: 20px;
    margin-top: 2rem;
    font-weight: 400px;

    @media screen and (max-width: 660px){
        font-size: 25px;
    }
`
export const ArticlesDsc = styled.p`
    font-size: 25px;
    margin-bottom: 40px;

    @media screen and (max-width: 660px){
        font-size: 18px;
    }
`
export const ArticlesBottom = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    text-align: left;
`
export const ArticlesContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const ArticlesImg = styled.img`
    width: 320px;
    height: 200px;
    background-size: cover;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    
`
export const ContentTitle = styled.h3`
    max-width: 320px;
    margin-top: 20px;
    margin-bottom: 20px;

`
export const ContentDsc = styled.p`
    max-width: 320px;
    margin-bottom: 5rem;
`