import styled from 'styled-components';
import doctor from '../../assets/img/img-doctor.svg';
import Select from 'react-select';
import {Link} from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: var(--white-color);
    position: relative;
    margin-bottom: 5rem;
    overflow: hidden;
    
`
export const HeroImg = styled.img`
    width: 100vw;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    position: relative;
    z-index: 1;
    
`
export const HeroContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 100%;
    background-color: var(--white-color);
    margin-top: -4rem;
    z-index: 2;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
export const TopContent = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    top: 0;
    padding: 0rem;
    text-align: left;
    background-color: var(--light-blue-color);
`
export const TopText = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 900px){
        text-align: center;
        padding: 1rem 9rem;
    }
`
export const TopTitle = styled.h2`

`
export const TopDesc = styled.p`
    margin-top: 7px;
`
export const TopImg = styled.div`
    background-image: url(${doctor});
    background-size: cover;
    padding: 3rem 12rem;

    @media screen and (max-width: 900px){
        display: none;
    }
`
export const BottomContent = styled.ul`
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: space-around;
    margin-top: 30px;
    flex-wrap: wrap;
`
export const BottomList = styled.li`
    display: flex;
    flex-direction: column;
    
`

export const ListLabel = styled.label`
    font-size: 15px;
    text-align: left;
    margin-bottom: 15px;
`

export const Dropdown = styled(Select)`
    width: 20rem;
    height: 100%;
    margin-bottom: 30px;

    @media screen and (max-width: 440px){
        width: 16rem;
    }
`

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 10px 45px;

    @media screen and (max-width: 1200px){
        justify-content: center;
    }
`

export const BottomButton = styled(Link)`
    color: var(--white-color);
    background-color: var(--orange-color);
    font-weight: 500;
    text-decoration: none;
    padding: 15px 45px;
    font-size: 18px;
    border-radius: 3px;
    margin-bottom: 2rem;
    align-items: center;
    justify-content: flex-end;
    display: flex;
    flex-direction: column;
`