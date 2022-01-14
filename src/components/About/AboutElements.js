import styled from 'styled-components'

export const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: var(--light-blue-color);
    
`
export const AboutTop = styled.div`
    display: flex;
    flex-direction: column;
`
export const AboutTitle = styled.h2`
    font-size: 35px;
    margin-bottom: 20px;
    margin-top: 5rem;
    font-weight: 400px;

    @media screen and (max-width: 660px){
        font-size: 25px;
    }
`
export const AboutDsc = styled.p`
    font-size: 25px;
    margin-bottom: 40px;

    @media screen and (max-width: 660px){
        font-size: 18px;
    }
`
export const AboutBottom = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
    justify-content: space-between;
    margin-bottom: 5rem;

    @media screen and (max-width: 1125px) {
        flex-direction: column;
    }
`
export const AboutLeft = styled.div`

`
export const LeftImg = styled.img`
    width: 650px;
    height: 600px;
    border-radius: 5px;
    background-size: cover;

    @media screen and (max-width: 1125px) {
        width: 550px;
        height: 500px;
    }

    @media screen and (max-width: 550px) {
        display: none;
    }
`
export const AboutRight = styled.div`
    align-items: center;
    justify-content: space-between;
`
export const RightContent = styled.div`
    display: flex;
    text-align: left;
    padding: 1rem;
`
export const RightImg = styled.img`
    width: 125px;
    height: 125px;
    border-radius: 5px;
    background-size: cover;
`
export const RightText = styled.div`
    margin-left: 20px;
`
export const RightTitle = styled.p`
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 10px;
`
export const RightDsc = styled.p`
    font-size: 18px;
    max-width: 350px;
`