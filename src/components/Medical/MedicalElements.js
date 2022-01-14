import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const MedicalContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--white-color);
    
`

export const MedicalTop = styled.div`

`

export const MedicalTitle = styled.h2`
    font-size: 35px;
    margin-bottom: 20px;
    margin-top: 5rem;
    font-weight: 400px;

    @media screen and (max-width: 660px){
        font-size: 25px;
    }
`
export const MedicalDsc = styled.p`
    font-size: 25px;
    margin-bottom: 40px;

    @media screen and (max-width: 660px){
        font-size: 18px;
    }
`
export const MedicalBottom = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
    text-align: left;
`
export const MedicalCard = styled(Link)`
    color: var(--dark-color);
    text-decoration: none;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 2px 10px 0 rgba(0, 0, 0, 0.19);
`
export const CardImg = styled.img`
    height: 160px;
    width: 210px;
    background-size: cover;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`
export const CardWrapper = styled.div`
    margin: 10px;
`
export const CardTitle = styled.h3`
    max-width: 190px;
    margin-bottom: 10px;
`
export const CardDsc = styled.p`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
`
export const CardSpan = styled.span`
    margin-top: 10px;
    text-decoration: line-through;
`
export const CardPrice = styled.p`
    color: var(--dark-blue-color);
    font-size: 20px;
    font-weight: 600;
`